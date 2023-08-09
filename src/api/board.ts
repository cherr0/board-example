import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { GetBoardResponse } from '~/types/board'

export const getBoardList = async () => {
  const { data } = await api.get<GetBoardResponse>(QueryKey.GET_BOARD)

  return data
}
