import styled from 'styled-components'

import { typography } from '~/styles/mixin'

export const ListHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
`

export const MainTitleUnit = styled.div`
  ${typography.display_4};
`
