import React from 'react'

import { ListHeaderWrapper, MainTitleUnit } from './style'

import { Button } from '~/components/ui/button'

const ListHeader = () => {
  return (
    <ListHeaderWrapper>
      <MainTitleUnit>게시판</MainTitleUnit>
      <Button size='lg'>글쓰기</Button>
    </ListHeaderWrapper>
  )
}

export default ListHeader
