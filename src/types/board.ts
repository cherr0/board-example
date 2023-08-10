export interface Board {
  id: number
  title: string
  content: string
}

export interface GetBoardResponse {
  boards: Board[]
}
