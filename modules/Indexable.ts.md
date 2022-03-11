---
title: Indexable.ts
nav_order: 3
parent: Modules
---

## Indexable overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Type classes](#type-classes)
  - [Indexable (interface)](#indexable-interface)
  - [Indexable1 (interface)](#indexable1-interface)
  - [Indexable2 (interface)](#indexable2-interface)
  - [Indexable2C (interface)](#indexable2c-interface)
  - [Indexable3 (interface)](#indexable3-interface)
  - [Indexable3C (interface)](#indexable3c-interface)
  - [Indexable4 (interface)](#indexable4-interface)

---

# Type classes

## Indexable (interface)

**Signature**

```ts
export interface Indexable<F> extends Lookup<F> {
  index: <A>(fa: HKT<F, A>) => (key: Key<F>) => A
}
```

Added in v1.0.0

## Indexable1 (interface)

**Signature**

```ts
export interface Indexable1<F extends Keyed1 & URIS> extends Lookup1<F> {
  index: <A>(fa: Kind<F, A>) => (key: KeyOf1<F>) => A
}
```

Added in v1.0.0

## Indexable2 (interface)

**Signature**

```ts
export interface Indexable2<F extends Keyed2 & URIS2> extends Lookup2<F> {
  index: <E, A>(fa: Kind2<F, E, A>) => (key: KeyOf2<F, E>) => A
}
```

Added in v1.0.0

## Indexable2C (interface)

**Signature**

```ts
export interface Indexable2C<F extends Keyed2 & URIS2, E> extends Lookup2C<F, E> {
  index: <A>(fa: Kind2<F, E, A>) => (key: KeyOf2<F, E>) => A
}
```

Added in v1.1.0

## Indexable3 (interface)

**Signature**

```ts
export interface Indexable3<F extends Keyed3 & URIS3> extends Lookup3<F> {
  index: <R, E, A>(fa: Kind3<F, R, E, A>) => (key: KeyOf3<F, R, E>) => A
}
```

Added in v1.0.0

## Indexable3C (interface)

**Signature**

```ts
export interface Indexable3C<F extends Keyed3 & URIS3, E> extends Lookup3C<F, E> {
  index: <R, A>(fa: Kind3<F, R, E, A>) => (key: KeyOf3<F, R, E>) => A
}
```

Added in v1.1.0

## Indexable4 (interface)

**Signature**

```ts
export interface Indexable4<F extends Keyed4 & URIS4> extends Lookup4<F> {
  index: <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => (key: KeyOf4<F, S, R, E>) => A
}
```

Added in v1.0.0
