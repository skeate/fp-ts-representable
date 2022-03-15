// Conway's Game of Life implemented as a `Comonad` _without_ `RepresentableStore` doing memoization.

import { identity, pipe } from 'fp-ts/function'
import * as Cns from 'fp-ts/Console'
import * as St from 'fp-ts/Store'
import * as T from 'fp-ts/Task'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import { Show } from 'fp-ts/Show'
import * as Str from 'fp-ts/string'
import { concatAll } from 'fp-ts/lib/Monoid'

type Coord = readonly [number, number]

type Grid = St.Store<Coord, boolean>

type Rule = (grid: Grid) => boolean

const neighborCoords = RA.comprehension(
  [RNEA.range(-1, 1), RNEA.range(-1, 1)],
  (x, y) => [x, y] as const,
  (x, y) => x !== 0 || y !== 0
)

export const basicRule: Rule = (g) => {
  const alive = St.Comonad.extract(g)
  const addCoords =
    (a: Coord) =>
    (b: Coord): Coord =>
      [a[0] + b[0], a[1] + b[1]]
  const neighbors = pipe(
    g,
    St.experiment(RA.Functor)((s) => pipe(neighborCoords, RA.map(addCoords(s))))
  )
  const numNeighborsAlive = pipe(neighbors, RA.filter(identity), RA.size)
  return (alive && numNeighborsAlive === 2) || numNeighborsAlive === 3
}

export const step: (r: Rule) => (g: Grid) => Grid = (r) => (g) =>
  St.Comonad.extend(g, r)

const basicStep = step(basicRule)

const glider = [
  [1, 0],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
]

const grid: Grid = {
  peek: ([x, y]) => glider.some(([gx, gy]) => x === gx && y === gy),
  pos: [0, 0],
}

export const showGrid = (width: number, height: number): Show<Grid> => ({
  show: (g) =>
    pipe(
      RA.comprehension(
        [RNEA.range(0, height - 1), RNEA.range(0, width - 1)],
        (y, x) =>
          (x === 0 ? '\n' : '') + (g.peek([x, y]) ? '\u{02588}' : '\u{02591}')
      ),
      concatAll(Str.Monoid)
    ),
})

const loop = (grid: Grid): T.Task<void> =>
  pipe(
    T.Do,
    T.chainIOK((_) => Cns.log(showGrid(5, 5).show(grid))),
    T.chainIOK((_) => Cns.log('')),
    T.delay(100),
    T.chain((_) => loop(basicStep(grid)))
  )

loop(grid)()
