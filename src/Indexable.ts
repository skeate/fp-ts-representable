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
import {
  Lookup,
  Lookup1,
  Lookup2,
  Lookup2C,
  Lookup3,
  Lookup3C,
  Lookup4,
} from './Lookup'

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Indexable<F> extends Lookup<F> {
  index: <A>(fa: HKT<F, A>) => (key: Key<F>) => A
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Indexable1<F extends Keyed1 & URIS> extends Lookup1<F> {
  index: <A>(fa: Kind<F, A>) => (key: KeyOf1<F>) => A
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Indexable2<F extends Keyed2 & URIS2> extends Lookup2<F> {
  index: <E, A>(fa: Kind2<F, E, A>) => (key: KeyOf2<F, E>) => A
}

/**
 * @since 1.1.0
 * @category Type classes
 */
export interface Indexable2C<F extends Keyed2 & URIS2, E>
  extends Lookup2C<F, E> {
  index: <A>(fa: Kind2<F, E, A>) => (key: KeyOf2<F, E>) => A
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Indexable3<F extends Keyed3 & URIS3> extends Lookup3<F> {
  index: <R, E, A>(fa: Kind3<F, R, E, A>) => (key: KeyOf3<F, R, E>) => A
}

/**
 * @since 1.1.0
 * @category Type classes
 */
export interface Indexable3C<F extends Keyed3 & URIS3, E>
  extends Lookup3C<F, E> {
  index: <R, A>(fa: Kind3<F, R, E, A>) => (key: KeyOf3<F, R, E>) => A
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Indexable4<F extends Keyed4 & URIS4> extends Lookup4<F> {
  index: <S, R, E, A>(
    fa: Kind4<F, S, R, E, A>
  ) => (key: KeyOf4<F, S, R, E>) => A
}
