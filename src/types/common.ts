import { css } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export type StyleRecord<T extends string> = Record<T, ReturnType<typeof css>>

export type OptionalStyleRecord<T extends string> = Partial<StyleRecord<T>>

export type Typography =
  | 'display_1'
  | 'display_2'
  | 'display_3'
  | 'display_4'
  | 'title'
  | 'subtitle'
  | 'subtitle_strong'

export type Shadow = 'sm' | 'md' | 'lg'
