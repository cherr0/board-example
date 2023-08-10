import { Response, Server } from 'miragejs'

import { AppSchema } from '../types'

import { DefinitionKey } from '~/constants/mirage'
import { QueryKey } from '~/constants/query'

export function routesForBoards(server: Server) {
  server.get(QueryKey.GET_BOARD, (schema: AppSchema, request) => {
    const users = schema.all(DefinitionKey.BOARD)
    return new Response(200, {}, users)
  })
}
