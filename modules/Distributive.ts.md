---
title: Distributive.ts
nav_order: 2
parent: Modules
---

## Distributive overview

The categorical dual of Traversable.

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Type classes](#type-classes)
  - [Distributive (interface)](#distributive-interface)
  - [Distributive1 (interface)](#distributive1-interface)
  - [Distributive2 (interface)](#distributive2-interface)
  - [Distributive2C (interface)](#distributive2c-interface)
  - [Distributive3 (interface)](#distributive3-interface)
  - [Distributive3C (interface)](#distributive3c-interface)
  - [Distributive4 (interface)](#distributive4-interface)

---

# Type classes

## Distributive (interface)

**Signature**

```ts
export interface Distributive<G> extends Functor<G> {
  distribute: <F>(F: Functor<F>) => <A>(fga: HKT<F, HKT<G, A>>) => HKT<G, HKT<F, A>>
  collect: <F>(F: Functor<F>) => <A, B>(agb: (a: A) => HKT<G, B>) => (fa: HKT<F, A>) => HKT<G, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive1 (interface)

**Signature**

```ts
export interface Distributive1<G extends URIS> extends Functor1<G> {
  distribute: <F>(F: Functor<F>) => <A>(fga: HKT<F, Kind<G, A>>) => Kind<G, HKT<F, A>>
  collect: <F>(F: Functor<F>) => <A, B>(agb: (a: A) => Kind<G, B>) => (fa: HKT<F, A>) => Kind<G, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive2 (interface)

**Signature**

```ts
export interface Distributive2<G extends URIS2> extends Functor2<G> {
  distribute: <F>(F: Functor<F>) => <E, A>(fga: HKT<F, Kind2<G, E, A>>) => Kind2<G, E, HKT<F, A>>
  collect: <F>(F: Functor<F>) => <E, A, B>(agb: (a: A) => Kind2<G, E, B>) => (fa: HKT<F, A>) => Kind2<G, E, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive2C (interface)

**Signature**

```ts
export interface Distributive2C<G extends URIS2, E> extends Functor2C<G, E> {
  distribute: <F>(F: Functor<F>) => <A>(fga: HKT<F, Kind2<G, E, A>>) => Kind2<G, E, HKT<F, A>>
  collect: <F>(F: Functor<F>) => <A, B>(agb: (a: A) => Kind2<G, E, B>) => (fa: HKT<F, A>) => Kind2<G, E, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive3 (interface)

**Signature**

```ts
export interface Distributive3<G extends URIS3> extends Functor3<G> {
  distribute: <F>(F: Functor<F>) => <R, E, A>(fga: HKT<F, Kind3<G, R, E, A>>) => Kind3<G, R, E, HKT<F, A>>
  collect: <F>(
    F: Functor<F>
  ) => <R, E, A, B>(agb: (a: A) => Kind3<G, R, E, B>) => (fa: HKT<F, A>) => Kind3<G, R, E, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive3C (interface)

**Signature**

```ts
export interface Distributive3C<G extends URIS3, E> extends Functor3C<G, E> {
  distribute: <F>(F: Functor<F>) => <R, A>(fga: HKT<F, Kind3<G, R, E, A>>) => Kind3<G, R, E, HKT<F, A>>
  collect: <F>(
    F: Functor<F>
  ) => <R, A, B>(agb: (a: A) => Kind3<G, R, E, B>) => (fa: HKT<F, A>) => Kind3<G, R, E, HKT<F, B>>
}
```

Added in v1.0.0

## Distributive4 (interface)

**Signature**

```ts
export interface Distributive4<G extends URIS4> extends Functor4<G> {
  distribute: <F>(F: Functor<F>) => <S, R, E, A>(fga: HKT<F, Kind4<G, S, R, E, A>>) => Kind4<G, S, R, E, HKT<F, A>>
  collect: <F>(
    F: Functor<F>
  ) => <S, R, E, A, B>(agb: (a: A) => Kind4<G, S, R, E, B>) => (fa: HKT<F, A>) => Kind4<G, S, R, E, HKT<F, B>>
}
```

Added in v1.0.0
