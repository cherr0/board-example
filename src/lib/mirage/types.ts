import { Registry } from 'miragejs'
import Schema from 'miragejs/orm/schema'

import { factories } from './factories'
import { models } from './models'

import { DefinitionKey } from '~/constants/mirage'

type AppRegistry = Registry<typeof models, typeof factories>
export type AppSchema = Schema<AppRegistry>

export type MirageDefinition<T> = Record<DefinitionKey, T>
