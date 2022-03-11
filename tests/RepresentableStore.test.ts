import * as fc from 'fast-check'
import * as laws from 'fp-ts-laws'
import * as Eq from 'fp-ts/Eq'
import { constTrue } from 'fp-ts/lib/function'
import * as N from 'fp-ts/number'
import * as RStore from '../src/RepresentableStore'
import * as Trip from './Triplet'

describe('RepresentableStore', () => {
  const lift = <A>(
    a: fc.Arbitrary<A>
  ): fc.Arbitrary<RStore.RepStore<'Triplet', A>> =>
    fc.tuple(a, a, a).map((ti) => RStore.repStore(Trip.Representable)(ti)(0))
  const liftEq = <A>(a: Eq.Eq<A>): Eq.Eq<RStore.RepStore<'Triplet', A>> =>
    // @ts-ignore
    Eq.struct({
      pos: Eq.eqStrict,
      rep: Eq.tuple(a, a, a),
      peek: Eq.fromEquals(constTrue),
    })

  it('should have a valid Functor instance', () => {
    laws.functor(RStore.getFunctor(Trip.Representable))(lift, liftEq)
  })

  it('should have a valid Comonad instance', () => {
    const arb = lift(fc.integer())
    const Sa = liftEq(N.Eq)
    const arbFunc = fc.func(fc.nat())

    const W = RStore.getComonad(Trip.Representable)

    const identity = fc.property(arb, (ga) =>
      Sa.equals(W.extend(ga, W.extract), ga)
    )
    const inverse = fc.property(fc.tuple(arb, arbFunc), ([ga, f]) =>
      N.Eq.equals(W.extract(W.extend(ga, f)), f(ga))
    )
    const associativity = fc.property(
      fc.tuple(arb, arbFunc, arbFunc),
      ([ga, f, g]) =>
        Sa.equals(
          W.extend(W.extend(ga, g), f),
          W.extend(ga, (ga_) => f(W.extend(ga_, g)))
        )
    )
    fc.assert(identity)
    fc.assert(inverse)
    fc.assert(associativity)
  })
})
