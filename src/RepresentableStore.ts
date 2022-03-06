/** @since 1.0.0 */

import {
  Representable,
  Representable1,
  Representable2,
  Representable3,
  Representable4,
} from './Representable'
import {
  Key,
  Keyed1,
  Keyed2,
  Keyed3,
  Keyed4,
  KeyOf1,
  KeyOf2,
  KeyOf3,
  KeyOf4,
} from './Key'
import { Comonad2C } from 'fp-ts/Comonad'
import {
  HKT,
  Kind,
  Kind2,
  Kind3,
  Kind4,
  URIS,
  URIS2,
  URIS3,
  URIS4,
} from 'fp-ts/HKT'
import { Functor2C } from 'fp-ts/Functor'
import { Store } from 'fp-ts/Store'

/**
 * @since 1.0.0
 * @category Instances
 */
export const URI = 'RepStore'

/**
 * @since 1.0.0
 * @category Instances
 */
export type URI = typeof URI

/**
 * @since 1.0.0
 * @category Model
 */
export interface RepStore<G, A> extends Store<Key<G>, A> {
  rep: HKT<G, A>
}

/**
 * @since 1.0.0
 * @category Constructor
 */
// @ts-ignore
export function repStore<G extends URIS4 & Keyed4>(
  G: Representable4<G>
): <S, R, E, A>(
  rep: Kind4<G, S, R, E, A>
) => (pos: KeyOf4<G, S, R, E>) => RepStore<G, A>
export function repStore<G extends URIS3 & Keyed3>(
  G: Representable3<G>
): <R, E, A>(rep: Kind3<G, R, E, A>) => (pos: KeyOf3<G, R, E>) => RepStore<G, A>
export function repStore<G extends URIS2 & Keyed2>(
  G: Representable2<G>
): <E, A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
export function repStore<G extends URIS & Keyed1>(
  G: Representable1<G>
): <A>(rep: Kind<G, A>) => (pos: KeyOf1<G>) => RepStore<G, A>
export function repStore<G>(
  G: Representable<G>
): <A>(rep: HKT<G, A>) => (pos: Key<G>) => RepStore<G, A>
export function repStore<G>(
  G: Representable<G>
): <A>(rep: HKT<G, A>) => (pos: Key<G>) => RepStore<G, A> {
  return (rep) => (pos) => ({
    peek: G.index(rep),
    pos,
    rep,
  })
}

declare module 'fp-ts/HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: RepStore<E, A>
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
// @ts-ignore
export function getFunctor<G extends URIS & Keyed1>(
  G: Representable1<G>
): Functor2C<URI, G>
export function getFunctor<G>(G: Representable<G>): Functor2C<URI, G>
export function getFunctor<G>(G: Representable<G>): Functor2C<URI, G> {
  return {
    URI,
    _E: undefined as any,
    map: (fa, f) => repStore(G)(G.map(fa.rep, f))(fa.pos),
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
// @ts-ignore
export function getComonad<G extends URIS & Keyed1>(
  G: Representable1<G>
): Comonad2C<URI, G>
export function getComonad<G>(G: Representable<G>): Comonad2C<URI, G>
export function getComonad<G>(G: Representable<G>): Comonad2C<URI, G> {
  const Functor = getFunctor(G)
  return {
    ...Functor,
    extend: (wa, f) =>
      Functor.map(
        repStore(G)(G.tabulate((k) => repStore(G)(wa.rep)(k)))(wa.pos),
        f
      ),
    extract: (wa) => G.index(wa.rep)(wa.pos),
  }
}