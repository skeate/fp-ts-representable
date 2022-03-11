/**
 * Key type family in the style of fp-ts HKTs.
 *
 * In relation to the fp-ts encoding,
 *
 * - HKT{,2,3,4} ~> Key{,2,3,4}
 * - URItoKind{,2,3,4} ~> URItoKey{,2,3,4}
 * - URIS{,2,3,4} ~> Keyed{1,2,3,4}
 * - Kind{,2,3,4} ~> KeyOf{1,2,3,4}
 *
 * In order to add a type to the `Key` type family, you must augment the
 * corresponding `URItoKey` interface in a manner similar to adding typeclass
 * instances in fp-ts:
 *
 *     // roughly the same as the haskell code
 *     //    type instance Key [] = Int
 *     declare module 'fp-ts-representable/Key' {
 *       interface URItoKey {
 *         ReadonlyArray: number
 *       }
 *     }
 *
 * @since 1.0.0
 */

import type { URI as aURI } from 'fp-ts/Array'
import type { URI as mURI } from 'fp-ts/Map'
import type { URI as neaURI } from 'fp-ts/NonEmptyArray'
import type { URI as rURI } from 'fp-ts/Record'
import type { URI as tURI } from 'fp-ts/Tuple'
import type { URI as raURI } from 'fp-ts/ReadonlyArray'
import type { URI as rmURI } from 'fp-ts/ReadonlyMap'
import type { URI as rneaURI } from 'fp-ts/ReadonlyNonEmptyArray'
import type { URI as rrURI } from 'fp-ts/ReadonlyRecord'
import type { URI as rtURI } from 'fp-ts/ReadonlyTuple'

/** @since 1.0.0 */
export interface URItoKey {
  [aURI]: number
  [neaURI]: number
  [raURI]: number
  [rneaURI]: number
  [rtURI]: number
  [tURI]: number
}

/** @since 1.0.0 */
// @ts-ignore
export interface URItoKey2<E> {
  [mURI]: E
  [rURI]: E
  [rmURI]: E
  [rrURI]: E
}

/** @since 1.0.0 */
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
export interface URItoKey3<R, E> {}

/** @since 1.0.0 */
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
export interface URItoKey4<S, R, E> {}

/** @since 1.0.0 */
export type Keyed1 = keyof URItoKey
/** @since 1.0.0 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Keyed2 = keyof URItoKey2<any>
/** @since 1.0.0 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Keyed3 = keyof URItoKey3<any, any>
/** @since 1.0.0 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Keyed4 = keyof URItoKey4<any, any, any>

/**
 * `* -> *` keys
 *
 * @since 1.0.0
 */
export interface Key<URI> {
  readonly _URI: URI
}

/**
 * `* -> * -> *` keys
 *
 * @since 1.0.0
 */
export interface Key2<URI, E> extends Key<URI> {
  readonly _E: E
}

/**
 * `* -> * -> * -> *` keys
 *
 * @since 1.0.0
 */
export interface Key3<URI, R, E> extends Key2<URI, E> {
  readonly _R: R
}

/**
 * `* -> * -> * -> * -> *` keys
 *
 * @since 1.0.0
 */
export interface Key4<URI, S, R, E> extends Key3<URI, R, E> {
  readonly _S: S
}

/** @since 1.0.0 */
export type KeyOf1<URI extends Keyed1> = URItoKey[URI]
/** @since 1.0.0 */
export type KeyOf2<URI extends Keyed2, E> = URItoKey2<E>[URI]
/** @since 1.0.0 */
export type KeyOf3<URI extends Keyed3, R, E> = URItoKey3<R, E>[URI]
/** @since 1.0.0 */
export type KeyOf4<URI extends Keyed4, S, R, E> = URItoKey4<S, R, E>[URI]

export const getKeyOf =
  <E = unknown, R = unknown, S = unknown>() =>
  <URI>(
    key: Key<URI>
  ): URI extends Keyed1
    ? KeyOf1<URI>
    : URI extends Keyed2
    ? KeyOf2<URI, E>
    : URI extends Keyed3
    ? KeyOf3<URI, R, E>
    : URI extends Keyed4
    ? KeyOf4<URI, S, R, E>
    : never =>
    key as any

export const toKey = <URI extends Keyed1 | Keyed2 | Keyed3 | Keyed4>(
  key:
    | KeyOf1<URI>
    | KeyOf2<URI, any>
    | KeyOf3<URI, any, any>
    | KeyOf4<URI, any, any, any>
): Key<URI> => key as any
