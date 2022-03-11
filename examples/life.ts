/* Conway's Game of Life implemented as a `Comonad` with `Representable` memoization of states.
 * Heavily based on https://chrispenner.ca/posts/conways-game-of-life
 */

import { readonlyArray } from 'fp-ts'
import { identity, pipe } from 'fp-ts/function'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import { Show } from 'fp-ts/Show'
import * as Store from 'fp-ts/Store'
import * as Str from 'fp-ts/string'

import * as BG from '../src/BoundedGrid'
import { getKeyOf } from '../src/Key'
import * as RS from '../src/RepresentableStore'

type Coord = readonly [number, number]

type Grid = RS.RepStore<BG.URI, boolean>

const Representable5x5 = BG.getRepresentable([5, 5], BG.torus)

type Rule = (grid: Grid) => boolean

const neighborCoords = RA.comprehension(
  [RNEA.range(-1, 1), RNEA.range(-1, 1)],
  (x, y) => [x, y] as const,
  (x, y) => x !== 0 || y !== 0
)

export const basicRule: Rule = (g) => {
  const alive = Store.Comonad.extract(g)
  const addCoords =
    (a: Coord) =>
    (b: Coord): Coord =>
      [a[0] + b[0], a[1] + b[1]]
  const neighbors = pipe(
    g,
    Store.experiment(RA.Functor)((s) =>
      pipe(neighborCoords, RA.map(addCoords(getKeyOf(s))))
    )
  )
  const numNeighborsAlive = pipe(neighbors, RA.filter(identity), RA.size)
  return (alive && numNeighborsAlive === 2) || numNeighborsAlive === 3
}

export const step: (r: Rule) => (g: Grid<boolean>) => Grid<boolean> =
  Store.Comonad.extend

export const showGrid = (
  width: number,
  height: number
): Show<Grid<boolean>> => ({
  show: (g) => {
    console.log(g)
    return pipe(
      RNEA.comprehension(
        [RNEA.range(0, height - 1), RNEA.range(0, width - 1)],
        (y, x) =>
          (x === 0 ? '\n' : '') + (g.peek([x, y]) ? '\u{02588}' : '\u{02591}')
      ),
      RNEA.concatAll(Str.Semigroup)
    )
  },
})
