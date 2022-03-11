/**
 * This module defines a two-dimensional grid with fixed boundaries. The main
 * reason for this is to provide a `Representable` grid for use with
 * `RepresentableStore`.
 *
 * @since 1.1.0
 */
import * as D from './Distributive'
import * as Ix from './Indexable'
import * as Lkp from './Lookup'
import * as Rep from './Representable'
import { pipe } from 'fp-ts/function'
import * as Fnc from 'fp-ts/Functor'
import { none, some } from 'fp-ts/Option'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import { Show } from 'fp-ts/lib/Show'

/**
 * @since 1.1.0
 * @category Model
 */
export const URI = 'BoundedGrid'

/**
 * @since 1.1.0
 * @category Model
 */
export type URI = typeof URI

/**
 * @since 1.1.0
 * @category Model
 */
export type Coord = [x: number, y: number]

declare module 'fp-ts/HKT' {
  interface URItoKind2<E, A> {
    [URI]: BoundedGrid<E, A>
  }
}

declare module './Key' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface URItoKey2<E> {
    [URI]: Coord
  }
}

/**
 * Due to limitations of the HKT encoding in fp-ts, the E parameter here is
 * unrestricted in this definition, but it really ought to be a tuple of number
 * literals `[width, height]`
 *
 * @since 1.1.0
 * @category Model
 */
export interface BoundedGrid<E, A> {
  dimensions: E
  values: RNEA.ReadonlyNonEmptyArray<RNEA.ReadonlyNonEmptyArray<A>>
}

const inBounds = <A>(i: number, xs: ReadonlyArray<A>) => i >= 0 && i < xs.length

type Index = Ix.Indexable2<URI>['index']

/**
 * An index function into a `BoundedGrid` so it behaves like a torus (i.e. wraps
 * around at the edges)
 *
 * @since 1.1.0
 * @category Utilities
 */
export const torus: Index =
  (grid) =>
  ([x, y]) =>
    grid.values[y % grid.values.length]![x % grid.values[0].length]!

/**
 * @since 1.1.0
 * @category Instances
 */
export const Lookup: Lkp.Lookup2<URI> = {
  lookup:
    ([x, y]) =>
    (fa) =>
      inBounds(y, fa.values) && inBounds(x, fa.values[0])
        ? some(fa.values[y]![x]!)
        : none,
}

/**
 * @since 1.1.0
 * @category Instances
 */
export const getIndexable = (index: Index): Ix.Indexable2<URI> => ({
  ...Lookup,
  index,
})

/**
 * @since 1.1.0
 * @category Functor
 */
export const map =
  <A, B>(f: (a: A) => B) =>
  <Dim>(fa: BoundedGrid<Dim, A>): BoundedGrid<Dim, B> => ({
    dimensions: fa.dimensions,
    values: pipe(fa.values, RNEA.map(RNEA.map(f))),
  })

/**
 * @since 1.1.0
 * @category Instances
 */
export const Functor: Fnc.Functor2<URI> = {
  URI,
  map: (fa, f) => map(f)(fa),
}

/**
 * Create a new `BoundedGrid` with the given dimensions and a function that
 * takes a coordinate and returns a value for that coordinate.
 *
 * @since 1.1.0
 * @category Constructors
 */
export const createWith =
  <E extends readonly [width: number, height: number]>(dimensions: E) =>
  <A>(f: (c: Coord) => A): BoundedGrid<E, A> => ({
    dimensions: dimensions,
    values: pipe(
      RNEA.range(0, dimensions[1] - 1),
      RNEA.map((y) =>
        pipe(
          RNEA.range(0, dimensions[0] - 1),
          RNEA.map((x) => f([x, y]))
        )
      )
    ),
  })

/**
 * @since 1.1.0
 * @category Instances
 */
export const getDistributive = <Dim extends readonly [number, number]>(
  dimensions: Dim
): D.Distributive2C<URI, Dim> => ({
  ...Functor,
  _E: undefined as unknown as Dim,
  distribute: (F) => (fga) =>
    createWith(dimensions)(([x, y]) => F.map(fga, (ga) => ga.values[y]![x]!)),
  collect: (F) => (agb) => (fa) =>
    createWith(dimensions)(([x, y]) => F.map(fa, (a) => agb(a).values[y]![x]!)),
})

/**
 * @since 1.1.0
 * @category Instances
 */
export const getRepresentable = <Dim extends readonly [number, number]>(
  dimensions: Dim,
  index: Index
): Rep.Representable2C<URI, Dim> => ({
  ...getDistributive(dimensions),
  ...getIndexable(index),
  tabulate: createWith(dimensions),
})

/**
 * @since 1.1.0
 * @category Instances
 */
export const getShow: <A>(
  show: Show<A>,
  intercalation?: string
) => Show<BoundedGrid<unknown, A>> = (show, intercalation = '') => ({
  show: (bg) =>
    bg.values.map((r) => r.map(show.show).join(intercalation)).join('\n'),
})
