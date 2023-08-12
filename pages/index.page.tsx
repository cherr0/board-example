import type { NextPage } from 'next'

import BoardList from './src/domain/features/board-list'
import ListHeader from './src/domain/features/list-header'

import AsyncBoundary from 'src/components/container/async-boundary'
import MainLayout from 'src/components/ui/main-layout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <ListHeader />
      <AsyncBoundary>
        <BoardList />
      </AsyncBoundary>
    </MainLayout>
  )
}

export default Home
