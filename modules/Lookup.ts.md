---
title: Lookup.ts
nav_order: 4
parent: Modules
---

## Lookup overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Type classes](#type-classes)
  - [Lookup (interface)](#lookup-interface)
  - [Lookup1 (interface)](#lookup1-interface)
  - [Lookup2 (interface)](#lookup2-interface)
  - [Lookup3 (interface)](#lookup3-interface)
  - [Lookup4 (interface)](#lookup4-interface)

---

# Type classes

## Lookup (interface)

**Signature**

```ts
export interface Lookup<F> {
  lookup: (key: Key<F>) => <A>(fa: HKT<F, A>) => Option<A>
}
```

Added in v1.0.0

## Lookup1 (interface)

**Signature**

```ts
export interface Lookup1<F extends Keyed1 & URIS> {
  lookup: (key: KeyOf1<F>) => <A>(fa: Kind<F, A>) => Option<A>
}
```

Added in v1.0.0

## Lookup2 (interface)

**Signature**

```ts
export interface Lookup2<F extends Keyed2 & URIS2> {
  lookup: <E>(key: KeyOf2<F, E>) => <A>(fa: Kind2<F, E, A>) => Option<A>
}
```

Added in v1.0.0

## Lookup3 (interface)

**Signature**

```ts
export interface Lookup3<F extends Keyed3 & URIS3> {
  lookup: <R, E>(key: KeyOf3<F, R, E>) => <A>(fa: Kind3<F, R, E, A>) => Option<A>
}
```

Added in v1.0.0

## Lookup4 (interface)

**Signature**

```ts
export interface Lookup4<F extends Keyed4 & URIS4> {
  lookup: <S, R, E>(key: KeyOf4<F, S, R, E>) => <A>(fa: Kind4<F, S, R, E, A>) => Option<A>
}
```

Added in v1.0.0
