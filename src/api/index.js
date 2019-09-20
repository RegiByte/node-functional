import { combineRoutes, EffectFactory } from '@marblejs/core'
import { auth$ } from './auth'
import { preflighEffect$ } from './common/effects'
import { notFoundEffect$ } from './common/effects/notFound.effect'

const preflight$ = EffectFactory
  .matchPath('*')
  .matchType('OPTIONS')
  .use(preflighEffect$)

const notFound$ = EffectFactory
  .matchPath('*')
  .matchType('*')
  .use(notFoundEffect$)

export const api$ = combineRoutes('/api', [
  preflight$,
  auth$,
  notFound$
])
