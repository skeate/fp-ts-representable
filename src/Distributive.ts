/**
 * The categorical dual of Traversable.
 *
 * @since 1.0.0
 */

import {
  Functor,
  Functor1,
  Functor2,
  Functor2C,
  Functor3,
  Functor3C,
  Functor4,
} from 'fp-ts/Functor'
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

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive<G> extends Functor<G> {
  distribute: <F>(
    F: Functor<F>
  ) => <A>(fga: HKT<F, HKT<G, A>>) => HKT<G, HKT<F, A>>
  collect: <F>(
    F: Functor<F>
  ) => <A, B>(agb: (a: A) => HKT<G, B>) => (fa: HKT<F, A>) => HKT<G, HKT<F, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive1<G extends URIS> extends Functor1<G> {
  distribute: <F extends URIS>(
    F: Functor1<F>
  ) => <A>(fga: Kind<F, Kind<G, A>>) => Kind<G, Kind<F, A>>
  collect: <F extends URIS>(
    F: Functor1<F>
  ) => <A, B>(
    agb: (a: A) => Kind<G, B>
  ) => (fa: Kind<F, A>) => Kind<G, Kind<F, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive2<G extends URIS2> extends Functor2<G> {
  distribute: <F extends URIS2>(
    F: Functor2<F>
  ) => <E, A>(fga: Kind2<F, E, Kind2<G, E, A>>) => Kind2<G, E, Kind2<F, E, A>>
  collect: <F extends URIS2>(
    F: Functor2<F>
  ) => <E, A, B>(
    agb: (a: A) => Kind2<G, E, B>
  ) => (fa: Kind2<F, E, A>) => Kind2<G, E, Kind2<F, E, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive2C<G extends URIS2, E> extends Functor2C<G, E> {
  distribute: <F extends URIS2>(
    F: Functor2<F>
  ) => <A>(fga: Kind2<F, E, Kind2<G, E, A>>) => Kind2<G, E, Kind2<F, E, A>>
  collect: <F extends URIS2>(
    F: Functor2<F>
  ) => <A, B>(
    agb: (a: A) => Kind2<G, E, B>
  ) => (fa: Kind2<F, E, A>) => Kind2<G, E, Kind2<F, E, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive3<G extends URIS3> extends Functor3<G> {
  distribute: <F extends URIS3>(
    F: Functor3<F>
  ) => <R, E, A>(
    fga: Kind3<F, R, E, Kind3<G, R, E, A>>
  ) => Kind3<G, R, E, Kind3<F, R, E, A>>
  collect: <F extends URIS3>(
    F: Functor3<F>
  ) => <R, E, A, B>(
    agb: (a: A) => Kind3<G, R, E, B>
  ) => (fa: Kind3<F, R, E, A>) => Kind3<G, R, E, Kind3<F, R, E, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive3C<G extends URIS3, E> extends Functor3C<G, E> {
  distribute: <F extends URIS3>(
    F: Functor3<F>
  ) => <R, A>(
    fga: Kind3<F, R, E, Kind3<G, R, E, A>>
  ) => Kind3<G, R, E, Kind3<F, R, E, A>>
  collect: <F extends URIS3>(
    F: Functor3<F>
  ) => <R, A, B>(
    agb: (a: A) => Kind3<G, R, E, B>
  ) => (fa: Kind3<F, R, E, A>) => Kind3<G, R, E, Kind3<F, R, E, B>>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Distributive4<G extends URIS4> extends Functor4<G> {
  distribute: <F extends URIS4>(
    F: Functor4<F>
  ) => <S, R, E, A>(
    fga: Kind4<F, S, R, E, Kind4<G, S, R, E, A>>
  ) => Kind4<G, S, R, E, Kind4<F, S, R, E, A>>
  collect: <F extends URIS4>(
    F: Functor4<F>
  ) => <S, R, E, A, B>(
    agb: (a: A) => Kind4<G, S, R, E, B>
  ) => (fa: Kind4<F, S, R, E, A>) => Kind4<G, S, R, E, Kind4<F, S, R, E, B>>
}
