import { Model } from 'miragejs'
import { ModelDefinition } from 'miragejs/-types'

import { MirageDefinition } from '~/lib/mirage/types'
import { Board } from '~/types/board'

const BoardModel: ModelDefinition<Board> = Model.extend({})

export const models: MirageDefinition<ModelDefinition> = {
  board: BoardModel
}
