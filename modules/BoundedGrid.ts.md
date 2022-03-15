---
title: BoundedGrid.ts
nav_order: 1
parent: Modules
---

## BoundedGrid overview

This module defines a two-dimensional grid with fixed boundaries. The main
reason for this is to provide a `Representable` grid for use with
`RepresentableStore`.

Added in v1.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [createWith](#createwith)
- [Functor](#functor)
  - [map](#map)
- [Instances](#instances)
  - [Functor](#functor-1)
  - [Lookup](#lookup)
  - [getDistributive](#getdistributive)
  - [getIndexable](#getindexable)
  - [getRepresentable](#getrepresentable)
  - [getShow](#getshow)
- [Model](#model)
  - [BoundedGrid (interface)](#boundedgrid-interface)
  - [Coord (type alias)](#coord-type-alias)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
- [Utilities](#utilities)
  - [torus](#torus)

---

# Constructors

## createWith

Create a new `BoundedGrid` with the given dimensions and a function that
takes a coordinate and returns a value for that coordinate.

**Signature**

```ts
export declare const createWith: <E extends readonly [width: number, height: number]>(
  dimensions: E
) => <A>(f: (c: Coord) => A) => BoundedGrid<E, A>
```

Added in v1.1.0

# Functor

## map

**Signature**

```ts
export declare const map: <A, B>(f: (a: A) => B) => <Dim>(fa: BoundedGrid<Dim, A>) => BoundedGrid<Dim, B>
```

Added in v1.1.0

# Instances

## Functor

**Signature**

```ts
export declare const Functor: Fnc.Functor2<'BoundedGrid'>
```

Added in v1.1.0

## Lookup

**Signature**

```ts
export declare const Lookup: Lkp.Lookup2<'BoundedGrid'>
```

Added in v1.1.0

## getDistributive

**Signature**

```ts
export declare const getDistributive: <Dim extends readonly [number, number]>(
  dimensions: Dim
) => D.Distributive2C<'BoundedGrid', Dim>
```

Added in v1.1.0

## getIndexable

**Signature**

```ts
export declare const getIndexable: (index: Index) => Ix.Indexable2<URI>
```

Added in v1.1.0

## getRepresentable

**Signature**

```ts
export declare const getRepresentable: <Dim extends readonly [number, number]>(
  dimensions: Dim,
  index: Index
) => Rep.Representable2C<'BoundedGrid', Dim>
```

Added in v1.1.0

## getShow

**Signature**

```ts
export declare const getShow: <K, A>(show: Show<A>, intercalation?: string | undefined) => Show<BoundedGrid<K, A>>
```

Added in v1.1.0

# Model

## BoundedGrid (interface)

Due to limitations of the HKT encoding in fp-ts, the E parameter here is
unrestricted in this definition, but it really ought to be a tuple of number
literals `[width, height]`

**Signature**

```ts
export interface BoundedGrid<E, A> {
  dimensions: E
  values: RNEA.ReadonlyNonEmptyArray<RNEA.ReadonlyNonEmptyArray<A>>
}
```

Added in v1.1.0

## Coord (type alias)

**Signature**

```ts
export type Coord = readonly [x: number, y: number]
```

Added in v1.1.0

## URI

**Signature**

```ts
export declare const URI: 'BoundedGrid'
```

Added in v1.1.0

## URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v1.1.0

# Utilities

## torus

An index function into a `BoundedGrid` so it behaves like a torus (i.e. wraps
around at the edges)

**Signature**

```ts
export declare const torus: <E, A>(fa: BoundedGrid<E, A>) => (key: Coord) => A
```

Added in v1.1.0
