import { faker } from '@faker-js/faker'
import { createServer } from 'miragejs'

import { endpoints } from './endpoints'
import { factories } from './factories'
import { models } from './models'

import Config from '~/constants/config'
import { DefinitionKey } from '~/constants/mirage'

export function startMirage() {
  const server = createServer({
    models,
    factories,
    namespace: 'api',
    seeds(server) {
      server.createList(
        DefinitionKey.BOARD,
        faker.number.int({ min: 10, max: 25 })
      )
    }
  })
  // logging
  server.logging = true

  // internal URLs
  for (const namespace of Object.keys(endpoints)) {
    endpoints[namespace](server)
  }

  server.passthrough()
  console.log({ dump: JSON.stringify(server.db.dump()) })
}
