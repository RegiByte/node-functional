import { createContext } from '@marblejs/core'
import httpListener from './app'
import * as http from 'http'

const httpServer = httpListener
  .run(createContext())

export const server = http
  .createServer(httpServer)

server.listen(3333, '127.0.0.1', () => {
  console.log('running on port 3333')
})
