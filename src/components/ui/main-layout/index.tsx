import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

import { MainContentBox, MainLayoutWrapper } from './style'

import { themeState } from '~/atoms/common'

interface Props {
  children?: ReactNode
}
const MainLayout = ({ children }: Props) => {
  const theme = useRecoilValue(themeState)

  return (
    <MainLayoutWrapper mode={theme}>
      <MainContentBox>{children}</MainContentBox>
    </MainLayoutWrapper>
  )
}

export default MainLayout
