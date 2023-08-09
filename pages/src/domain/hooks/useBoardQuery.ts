import { useQuery } from '@tanstack/react-query'

import { getBoardList } from '~/api/board'

const useBoardQuery = () => {
  const queryState = useQuery(['BOARD_QUERY'], () => getBoardList())

  return {
    ...queryState
  }
}

export default useBoardQuery
