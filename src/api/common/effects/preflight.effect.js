import { HttpStatus } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

export const preflighEffect$ = req$ => (
  req$.pipe(
    mapTo({
      status: HttpStatus.OK
    })
  )
)
