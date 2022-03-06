import { Functor1 } from 'fp-ts/Functor'
import { identity } from 'fp-ts/function'
import { some } from 'fp-ts/Option'
import { Representable1 } from '../src/Representable'

export const URI = 'Triplet'
export type URI = typeof URI

declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    readonly [URI]: Triplet<A>
  }
}

declare module '../src/Key' {
  interface URItoKey {
    readonly [URI]: 0 | 1 | 2
  }
}

type Triplet<A> = [A, A, A]

export const triplet = <A>(a: A, b: A, c: A): Triplet<A> => [a, b, c]

export const Functor: Functor1<URI> = {
  URI,
  map: (fa, f) => [f(fa[0]), f(fa[1]), f(fa[2])],
}

export const fst = <A>(t: Triplet<A>) => t[0]
export const snd = <A>(t: Triplet<A>) => t[1]
export const thd = <A>(t: Triplet<A>) => t[2]

export const distribute: Representable1<URI>['distribute'] = (F) => (fga) =>
  [F.map(fga, fst), F.map(fga, snd), F.map(fga, thd)]

export const Representable: Representable1<URI> = {
  ...Functor,
  lookup: (k) => (ga) => some(ga[k]),
  index: (ga) => (k) => ga[k],
  collect: (F) => (agb) => (fa) =>
    Functor.map(distribute(F)(F.map(fa, agb)), identity),
  distribute,
  tabulate: (kfa) => [kfa(0), kfa(1), kfa(2)],
}
