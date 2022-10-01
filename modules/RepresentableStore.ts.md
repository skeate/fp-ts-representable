---
title: RepresentableStore.ts
nav_order: 8
parent: Modules
---

## RepresentableStore overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructor](#constructor)
  - [repStore](#repstore)
- [Instances](#instances)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
  - [getComonad](#getcomonad)
  - [getFunctor](#getfunctor)
  - [getShow](#getshow)
- [Model](#model)
  - [RepStore (interface)](#repstore-interface)
- [Utils](#utils)
  - [experiment](#experiment)

---

# Constructor

## repStore

**Signature**

```ts
export declare function repStore<G extends URIS4 & Keyed4>(
  G: Representable4<G>
): <S, R, E, A>(rep: Kind4<G, S, R, E, A>) => (pos: KeyOf4<G, S, R, E>) => RepStore<G, A>
export declare function repStore<G extends URIS3 & Keyed3>(
  G: Representable3<G>
): <R, E, A>(rep: Kind3<G, R, E, A>) => (pos: KeyOf3<G, R, E>) => RepStore<G, A>
export declare function repStore<G extends URIS3 & Keyed3, E>(
  G: Representable3C<G, E>
): <R, A>(rep: Kind3<G, R, E, A>) => (pos: KeyOf3<G, R, E>) => RepStore<G, A>
export declare function repStore<G extends URIS2 & Keyed2>(
  G: Representable2<G>
): <E, A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
export declare function repStore<G extends URIS2 & Keyed2, E>(
  G: Representable2C<G, E>
): <A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
export declare function repStore<G extends URIS & Keyed1>(
  G: Representable1<G>
): <A>(rep: Kind<G, A>) => (pos: KeyOf1<G>) => RepStore<G, A>
export declare function repStore<G>(G: Representable<G>): <A>(rep: HKT<G, A>) => (pos: Key<G>) => RepStore<G, A>
```

Added in v1.0.0

# Instances

## URI

**Signature**

```ts
export declare const URI: 'RepStore'
```

Added in v1.0.0

## URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v1.0.0

## getComonad

**Signature**

```ts
export declare function getComonad<G extends URIS2 & Keyed2, E>(G: Representable2C<G, E>): Comonad2C<URI, G>
export declare function getComonad<G extends URIS & Keyed1>(G: Representable1<G>): Comonad2C<URI, G>
export declare function getComonad<G>(G: Representable<G>): Comonad2C<URI, G>
```

Added in v1.0.0

## getFunctor

**Signature**

```ts
export declare function getFunctor<G extends URIS2 & Keyed2, E>(G: Representable2C<G, E>): Functor2C<URI, G>
export declare function getFunctor<G extends URIS & Keyed1>(G: Representable1<G>): Functor2C<URI, G>
export declare function getFunctor<G>(G: Representable<G>): Functor2C<URI, G>
```

Added in v1.0.0

## getShow

**Signature**

```ts
export declare const getShow: {
  <G extends never, S, R, E, A>(GShow: Show<Kind4<G, S, R, E, A>>): Show<RepStore<G, A>>
  <G extends never, R, E, A>(GShow: Show<Kind3<G, R, E, A>>): Show<RepStore<G, A>>
  <
    G extends
      | 'Separated'
      | 'Either'
      | 'Map'
      | 'Tuple'
      | 'ReadonlyMap'
      | 'ReadonlyTuple'
      | 'BoundedGrid'
      | 'Store'
      | 'RepStore',
    E,
    A
  >(
    GShow: Show<Kind2<G, E, A>>
  ): Show<RepStore<G, A>>
  <
    G extends
      | 'Predicate'
      | 'ReadonlyNonEmptyArray'
      | 'Option'
      | 'ReadonlyRecord'
      | 'Endomorphism'
      | 'Eq'
      | 'Ord'
      | 'NonEmptyArray'
      | 'Array'
      | 'Record'
      | 'ReadonlyArray',
    A
  >(
    GShow: Show<Kind<G, A>>
  ): Show<RepStore<G, A>>
  <G, A>(GShow: Show<HKT<G, A>>): Show<RepStore<G, A>>
}
```

Added in v1.2.0

# Model

## RepStore (interface)

**Signature**

```ts
export interface RepStore<G, A> extends Store<Key<G>, A> {
  rep: HKT<G, A>
}
```

Added in v1.0.0

# Utils

## experiment

**Signature**

```ts
export declare function experiment<G extends URIS2 & Keyed2, GE>(
  G: Representable2C<G, GE>
): Experiment<G, KeyOf2<G, GE>>
export declare function experiment<G extends URIS & Keyed1>(G: Representable1<G>): Experiment<G, KeyOf1<G>>
export declare function experiment<G>(G: Representable<G>): Experiment<G, Key<G>>
```

Added in v1.2.0
