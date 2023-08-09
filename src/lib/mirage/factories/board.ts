import { faker } from '@faker-js/faker'
import { Factory } from 'miragejs'

import { Board } from '~/types/board'
export const boardFactory = Factory.extend<Board>({
  id(i) {
    return i
  },
  title() {
    return faker.commerce.productName()
  },
  content() {
    return faker.commerce.productDescription()
  }
})
