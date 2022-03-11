/** @since 1.0.0 */

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
import { Option } from 'fp-ts/Option'
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

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Lookup<F> {
  lookup: (key: Key<F>) => <A>(fa: HKT<F, A>) => Option<A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Lookup1<F extends Keyed1 & URIS> {
  lookup: (key: KeyOf1<F>) => <A>(fa: Kind<F, A>) => Option<A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Lookup2<F extends Keyed2 & URIS2> {
  lookup: <E>(key: KeyOf2<F, E>) => <A>(fa: Kind2<F, E, A>) => Option<A>
}

/**
 * @since 1.1.0
 * @category Type classes
 */
export interface Lookup2C<F extends Keyed2 & URIS2, E> {
  lookup: (key: KeyOf2<F, E>) => <A>(fa: Kind2<F, E, A>) => Option<A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Lookup3<F extends Keyed3 & URIS3> {
  lookup: <R, E>(
    key: KeyOf3<F, R, E>
  ) => <A>(fa: Kind3<F, R, E, A>) => Option<A>
}

/**
 * @since 1.1.0
 * @category Type classes
 */
export interface Lookup3C<F extends Keyed3 & URIS3, E> {
  lookup: <R>(key: KeyOf3<F, R, E>) => <A>(fa: Kind3<F, R, E, A>) => Option<A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Lookup4<F extends Keyed4 & URIS4> {
  lookup: <S, R, E>(
    key: KeyOf4<F, S, R, E>
  ) => <A>(fa: Kind4<F, S, R, E, A>) => Option<A>
}
