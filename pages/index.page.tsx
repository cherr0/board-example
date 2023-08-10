import type { NextPage } from 'next'

import useBoardQuery from './src/domain/hooks/useBoardQuery'

const Home: NextPage = () => {
  const { data } = useBoardQuery()

  return <div>homepage</div>
}

export default Home
