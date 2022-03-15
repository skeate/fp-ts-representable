/** @since 1.0.0 */

import {
  Representable,
  Representable1,
  Representable2,
  Representable2C,
  Representable3,
  Representable3C,
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
import {
  Functor,
  Functor1,
  Functor2,
  Functor2C,
  Functor3,
  Functor3C,
} from 'fp-ts/Functor'
import { experiment as _experiment, Store } from 'fp-ts/Store'

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
export function repStore<G extends URIS4 & Keyed4>(
  G: Representable4<G>
): <S, R, E, A>(
  rep: Kind4<G, S, R, E, A>
) => (pos: KeyOf4<G, S, R, E>) => RepStore<G, A>
export function repStore<G extends URIS3 & Keyed3>(
  G: Representable3<G>
): <R, E, A>(rep: Kind3<G, R, E, A>) => (pos: KeyOf3<G, R, E>) => RepStore<G, A>
export function repStore<G extends URIS3 & Keyed3, E>(
  G: Representable3C<G, E>
): <R, A>(rep: Kind3<G, R, E, A>) => (pos: KeyOf3<G, R, E>) => RepStore<G, A>
export function repStore<G extends URIS2 & Keyed2>(
  G: Representable2<G>
): <E, A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
export function repStore<G extends URIS2 & Keyed2, E>(
  G: Representable2C<G, E>
): <A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
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
export function getFunctor<G extends URIS2 & Keyed2, E>(
  G: Representable2C<G, E>
): Functor2C<URI, G>
export function getFunctor<G extends URIS & Keyed1>(
  G: Representable1<G>
): Functor2C<URI, G>
export function getFunctor<G>(G: Representable<G>): Functor2C<URI, G>
export function getFunctor<G>(G: Representable<G>): Functor2C<URI, G> {
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _E: undefined as any,
    map: (fa, f) => repStore(G)(G.map(fa.rep, f))(fa.pos),
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export function getComonad<G extends URIS2 & Keyed2, E>(
  G: Representable2C<G, E>
): Comonad2C<URI, G>
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

interface Experiment<G, Key> {
  <F extends URIS3, E>(F: Functor3C<F, E>): <R>(
    f: (s: Key) => Kind3<F, R, E, Key>
  ) => <A>(wa: RepStore<G, A>) => Kind3<F, R, E, A>
  <F extends URIS3>(F: Functor3<F>): <R, E>(
    f: (s: Key) => Kind3<F, R, E, Key>
  ) => <A>(wa: RepStore<G, A>) => Kind3<F, R, E, A>
  <F extends URIS2, E>(F: Functor2C<F, E>): (
    f: (s: Key) => Kind2<F, E, Key>
  ) => <A>(wa: RepStore<G, A>) => Kind2<F, E, A>
  <F extends URIS2>(F: Functor2<F>): <E>(
    f: (s: Key) => Kind2<F, E, Key>
  ) => <A>(wa: RepStore<G, A>) => Kind2<F, E, A>
  <F extends URIS>(F: Functor1<F>): (
    f: (s: Key) => Kind<F, Key>
  ) => <A>(wa: RepStore<G, A>) => Kind<F, A>
  <F>(F: Functor<F>): (
    f: (s: Key) => HKT<F, Key>
  ) => <A>(wa: RepStore<G, A>) => HKT<F, A>
}

export function experiment<G extends URIS2 & Keyed2, GE>(
  G: Representable2C<G, GE>
): Experiment<G, KeyOf2<G, GE>>
export function experiment<G extends URIS & Keyed1>(
  G: Representable1<G>
): Experiment<G, KeyOf1<G>>
export function experiment<G>(G: Representable<G>): Experiment<G, Key<G>>
export function experiment<G>(_G: Representable<G>): Experiment<G, Key<G>> {
  return <F>(F: Functor<F>) =>
    (f: (s: Key<G>) => HKT<F, Key<G>>) =>
    <A>(wa: Store<Key<G>, A>): HKT<F, A> =>
      F.map(f(wa.pos), (s) => wa.peek(s))
}
