---
title: RepresentableStore.ts
nav_order: 6
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
- [Model](#model)
  - [RepStore (interface)](#repstore-interface)

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
export declare function repStore<G extends URIS2 & Keyed2>(
  G: Representable2<G>
): <E, A>(rep: Kind2<G, E, A>) => (pos: KeyOf2<G, E>) => RepStore<G, A>
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
export declare function getComonad<G extends URIS & Keyed1>(G: Representable1<G>): Comonad2C<URI, G>
export declare function getComonad<G>(G: Representable<G>): Comonad2C<URI, G>
```

Added in v1.0.0

## getFunctor

**Signature**

```ts
export declare function getFunctor<G extends URIS & Keyed1>(G: Representable1<G>): Functor2C<URI, G>
export declare function getFunctor<G>(G: Representable<G>): Functor2C<URI, G>
```

Added in v1.0.0

# Model

## RepStore (interface)

**Signature**

```ts
export interface RepStore<G, A> extends Store<Key<G>, A> {
  rep: HKT<G, A>
}
```

Added in v1.0.0
