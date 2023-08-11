import styled from 'styled-components'

import { darkVariables, lightVariables } from '~/styles/variables'
import { ThemeType } from '~/types/common'

export const MainLayoutWrapper = styled.article<{ mode: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  ${({ mode }) => (mode === 'light' ? lightVariables : darkVariables)};
`

export const MainContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  border: 1px solid var(--border-default);
  padding: 12px 16px;
`
