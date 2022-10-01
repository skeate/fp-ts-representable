---
title: Key.ts
nav_order: 5
parent: Modules
---

## Key overview

Key type family in the style of fp-ts HKTs.

In relation to the fp-ts encoding,

- HKT{,2,3,4} ~> Key{,2,3,4}
- URItoKind{,2,3,4} ~> URItoKey{,2,3,4}
- URIS{,2,3,4} ~> Keyed{1,2,3,4}
- Kind{,2,3,4} ~> KeyOf{1,2,3,4}

In order to add a type to the `Key` type family, you must augment the
corresponding `URItoKey` interface in a manner similar to adding typeclass
instances in fp-ts:

    // roughly the same as the haskell code
    //    type instance Key [] = Int
    declare module 'fp-ts-representable/Key' {
      interface URItoKey {
        ReadonlyArray: number
      }
    }

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Key (interface)](#key-interface)
  - [Key2 (interface)](#key2-interface)
  - [Key3 (interface)](#key3-interface)
  - [Key4 (interface)](#key4-interface)
  - [KeyOf1 (type alias)](#keyof1-type-alias)
  - [KeyOf2 (type alias)](#keyof2-type-alias)
  - [KeyOf3 (type alias)](#keyof3-type-alias)
  - [KeyOf4 (type alias)](#keyof4-type-alias)
  - [Keyed1 (type alias)](#keyed1-type-alias)
  - [Keyed2 (type alias)](#keyed2-type-alias)
  - [Keyed3 (type alias)](#keyed3-type-alias)
  - [Keyed4 (type alias)](#keyed4-type-alias)
  - [URItoKey (interface)](#uritokey-interface)
  - [URItoKey2 (interface)](#uritokey2-interface)
  - [URItoKey3 (interface)](#uritokey3-interface)
  - [URItoKey4 (interface)](#uritokey4-interface)

---

# utils

## Key (interface)

`* -> *` keys

**Signature**

```ts
export interface Key<URI> {
  readonly _URI: URI
}
```

Added in v1.0.0

## Key2 (interface)

`* -> * -> *` keys

**Signature**

```ts
export interface Key2<URI, E> extends Key<URI> {
  readonly _E: E
}
```

Added in v1.0.0

## Key3 (interface)

`* -> * -> * -> *` keys

**Signature**

```ts
export interface Key3<URI, R, E> extends Key2<URI, E> {
  readonly _R: R
}
```

Added in v1.0.0

## Key4 (interface)

`* -> * -> * -> * -> *` keys

**Signature**

```ts
export interface Key4<URI, S, R, E> extends Key3<URI, R, E> {
  readonly _S: S
}
```

Added in v1.0.0

## KeyOf1 (type alias)

**Signature**

```ts
export type KeyOf1<URI extends Keyed1> = URItoKey[URI]
```

Added in v1.0.0

## KeyOf2 (type alias)

**Signature**

```ts
export type KeyOf2<URI extends Keyed2, E> = URItoKey2<E>[URI]
```

Added in v1.0.0

## KeyOf3 (type alias)

**Signature**

```ts
export type KeyOf3<URI extends Keyed3, R, E> = URItoKey3<R, E>[URI]
```

Added in v1.0.0

## KeyOf4 (type alias)

**Signature**

```ts
export type KeyOf4<URI extends Keyed4, S, R, E> = URItoKey4<S, R, E>[URI]
```

Added in v1.0.0

## Keyed1 (type alias)

**Signature**

```ts
export type Keyed1 = keyof URItoKey
```

Added in v1.0.0

## Keyed2 (type alias)

**Signature**

```ts
export type Keyed2 = keyof URItoKey2<any>
```

Added in v1.0.0

## Keyed3 (type alias)

**Signature**

```ts
export type Keyed3 = keyof URItoKey3<any, any>
```

Added in v1.0.0

## Keyed4 (type alias)

**Signature**

```ts
export type Keyed4 = keyof URItoKey4<any, any, any>
```

Added in v1.0.0

## URItoKey (interface)

**Signature**

```ts
export interface URItoKey {
  [aURI]: number
  [neaURI]: number
  [raURI]: number
  [rneaURI]: number
  [rtURI]: number
  [tURI]: number
}
```

Added in v1.0.0

## URItoKey2 (interface)

**Signature**

```ts
export interface URItoKey2<E> {
  [mURI]: E
  [rURI]: E
  [rmURI]: E
  [rrURI]: E
}
```

Added in v1.0.0

## URItoKey3 (interface)

**Signature**

```ts
export interface URItoKey3<R, E> {}
```

Added in v1.0.0

## URItoKey4 (interface)

**Signature**

```ts
export interface URItoKey4<S, R, E> {}
```

Added in v1.0.0
