---
title: Representable.ts
nav_order: 7
parent: Modules
---

## Representable overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Type classes](#type-classes)
  - [Representable (interface)](#representable-interface)
  - [Representable1 (interface)](#representable1-interface)
  - [Representable2 (interface)](#representable2-interface)
  - [Representable2C (interface)](#representable2c-interface)
  - [Representable3 (interface)](#representable3-interface)
  - [Representable3C (interface)](#representable3c-interface)
  - [Representable4 (interface)](#representable4-interface)

---

# Type classes

## Representable (interface)

**Signature**

```ts
export interface Representable<F> extends Distributive<F>, Indexable<F> {
  tabulate: <A>(kfa: (key: Key<F>) => A) => HKT<F, A>
}
```

Added in v1.0.0

## Representable1 (interface)

**Signature**

```ts
export interface Representable1<F extends Keyed1 & URIS> extends Distributive1<F>, Indexable1<F> {
  tabulate: <A>(kfa: (key: KeyOf1<F>) => A) => Kind<F, A>
}
```

Added in v1.0.0

## Representable2 (interface)

**Signature**

```ts
export interface Representable2<F extends Keyed2 & URIS2> extends Distributive2<F>, Indexable2<F> {
  tabulate: <E, A>(kfa: (key: KeyOf2<F, E>) => A) => Kind2<F, E, A>
}
```

Added in v1.0.0

## Representable2C (interface)

**Signature**

```ts
export interface Representable2C<F extends Keyed2 & URIS2, E> extends Distributive2C<F, E>, Indexable2C<F, E> {
  tabulate: <A>(kfa: (key: KeyOf2<F, E>) => A) => Kind2<F, E, A>
}
```

Added in v1.1.0

## Representable3 (interface)

**Signature**

```ts
export interface Representable3<F extends Keyed3 & URIS3> extends Distributive3<F>, Indexable3<F> {
  tabulate: <R, E, A>(kfa: (key: KeyOf3<F, R, E>) => A) => Kind3<F, R, E, A>
}
```

Added in v1.0.0

## Representable3C (interface)

**Signature**

```ts
export interface Representable3C<F extends Keyed3 & URIS3, E> extends Distributive3C<F, E>, Indexable3C<F, E> {
  tabulate: <R, E, A>(kfa: (key: KeyOf3<F, R, E>) => A) => Kind3<F, R, E, A>
}
```

Added in v1.1.0

## Representable4 (interface)

**Signature**

```ts
export interface Representable4<F extends Keyed4 & URIS4> extends Distributive4<F>, Indexable4<F> {
  tabulate: <S, R, E, A>(kfa: (key: KeyOf4<F, S, R, E>) => A) => Kind4<F, S, R, E, A>
}
```

Added in v1.0.0
