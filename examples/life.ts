/* Conway's Game of Life implemented as a `Comonad` with `Representable` memoization of states.
 * Heavily based on https://chrispenner.ca/posts/conways-game-of-life
 */

import { identity, pipe } from 'fp-ts/function'
import * as Cns from 'fp-ts/Console'
import * as T from 'fp-ts/Task'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'

import * as BG from '../src/BoundedGrid'
import * as RS from '../src/RepresentableStore'

type Grid = RS.RepStore<BG.URI, boolean>

const Representable5x5 = BG.getRepresentable([5, 5] as const, BG.torus)

const Comonad = RS.getComonad(Representable5x5)

type Rule = (grid: Grid) => boolean

const neighborCoords = RA.comprehension(
  [RNEA.range(-1, 1), RNEA.range(-1, 1)],
  (x, y) => [x, y] as const,
  (x, y) => x !== 0 || y !== 0
)

export const basicRule: Rule = (g) => {
  const alive = RS.getComonad(Representable5x5).extract(g)
  const addCoords =
    (a: BG.Coord) =>
    (b: BG.Coord): BG.Coord =>
      [a[0] + b[0], a[1] + b[1]]
  const neighbors = pipe(
    g,
    RS.experiment(Representable5x5)(RA.Functor)((s) =>
      pipe(neighborCoords, RA.map(addCoords(s)))
    )
  )
  const numNeighborsAlive = pipe(neighbors, RA.filter(identity), RA.size)
  return (alive && numNeighborsAlive === 2) || numNeighborsAlive === 3
}

export const step: (r: Rule) => (g: Grid) => Grid = (r) => (g) =>
  Comonad.extend(g, r)

const basicStep = step(basicRule)

const glider = [
  [1, 0],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
]

const grid = RS.repStore(Representable5x5)(
  BG.createWith([5, 5] as const)(([x, y]) =>
    glider.some(([gx, gy]) => x === gx && y === gy)
  )
)([0, 0])

const loop = (grid: Grid): T.Task<void> =>
  pipe(
    T.Do,
    T.chainIOK(() =>
      Cns.log(
        RS.getShow<BG.URI, readonly [5, 5], boolean>(
          BG.getShow({
            show: (a: boolean) => (a ? '\u2587' : '\u2591'),
          })
        ).show(grid)
      )
    ),
    T.chainIOK(() => Cns.log('')),
    T.delay(100),
    T.chain(() => loop(basicStep(grid)))
  )

loop(grid)()
