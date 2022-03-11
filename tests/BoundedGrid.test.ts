import * as fc from 'fast-check'
import * as laws from 'fp-ts-laws'
import * as Eq from 'fp-ts/Eq'
import * as N from 'fp-ts/number'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as BG from '../src/BoundedGrid'

describe('BoundedGrid', () => {
  const lift = <A>(
    a: fc.Arbitrary<A>
  ): fc.Arbitrary<BG.BoundedGrid<readonly [5, 4], A>> =>
    fc
      .array(fc.array(a, { minLength: 5, maxLength: 5 }), {
        minLength: 4,
        maxLength: 4,
      })
      .map((n) => BG.createWith([5, 4] as const)(([x, y]) => n[y]![x]!))

  const liftEq = <A>(a: Eq.Eq<A>): Eq.Eq<BG.BoundedGrid<readonly [5, 4], A>> =>
    Eq.struct({
      dimensions: RA.getEq(N.Eq),
      values: RNEA.getEq(RNEA.getEq(a)),
    })

  it('should have a valid Functor instance', () => {
    laws.functor(BG.Functor)(lift, liftEq)
  })

  it('should have a Show instance', () => {
    const bg = BG.createWith([3, 2])(([x, y]) => x % (y + 1) === 0)
    const { show } = BG.getShow({ show: (v: boolean) => (v ? 'X' : '.') })
    expect(show(bg)).toEqual('XXX\nX.X')
  })
})
