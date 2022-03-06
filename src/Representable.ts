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
  Distributive,
  Distributive1,
  Distributive2,
  Distributive3,
  Distributive4,
} from './Distributive'
import {
  Indexable,
  Indexable1,
  Indexable2,
  Indexable3,
  Indexable4,
} from './Indexable'

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Representable<F> extends Distributive<F>, Indexable<F> {
  tabulate: <A>(kfa: (key: Key<F>) => A) => HKT<F, A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Representable1<F extends Keyed1 & URIS>
  extends Distributive1<F>,
    Indexable1<F> {
  tabulate: <A>(kfa: (key: KeyOf1<F>) => A) => Kind<F, A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Representable2<F extends Keyed2 & URIS2>
  extends Distributive2<F>,
    Indexable2<F> {
  tabulate: <E, A>(kfa: (key: KeyOf2<F, E>) => A) => Kind2<F, E, A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Representable3<F extends Keyed3 & URIS3>
  extends Distributive3<F>,
    Indexable3<F> {
  tabulate: <R, E, A>(kfa: (key: KeyOf3<F, R, E>) => A) => Kind3<F, R, E, A>
}

/**
 * @since 1.0.0
 * @category Type classes
 */
export interface Representable4<F extends Keyed4 & URIS4>
  extends Distributive4<F>,
    Indexable4<F> {
  tabulate: <S, R, E, A>(
    kfa: (key: KeyOf4<F, S, R, E>) => A
  ) => Kind4<F, S, R, E, A>
}
