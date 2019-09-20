import { httpListener } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'
import { cors$ } from '@marblejs/middleware-cors'
import { logger$ } from '@marblejs/middleware-logger'

const middlewares = [
  cors$,
  logger$,
  bodyParser$()
]

const effects = [
    api$
]

export default httpListener({ middlewares, effects })
