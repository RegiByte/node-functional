import { use } from '@marblejs/core'
import { requestValidator$, t } from '@marblejs/middleware-io'
import { mergeMap, map } from 'rxjs/operators'
import { of } from 'rxjs'

const validator$ = requestValidator$({
  body: t.type({
    login: t.string,
    password: t.string
  })
})

export const loginEffect$ = req$ => req$.pipe(
  req$.pipe(
    use(validator$),
    mergeMap(req => of(req).pipe(
      map(req => req.body)
    ))
  )
)
