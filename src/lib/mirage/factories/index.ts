import { FactoryDefinition } from 'miragejs/-types'

import { boardFactory } from './board'

import { MirageDefinition } from '~/lib/mirage/types'

export * from './board'

export const factories: MirageDefinition<FactoryDefinition> = {
  board: boardFactory
}
