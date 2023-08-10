import { Server } from 'miragejs'

import { routesForBoards } from './board'

import { MirageDefinition } from '~/lib/mirage/types'

const endpoints: MirageDefinition<(server: Server) => void> = {
  board: routesForBoards
}

export { endpoints }
