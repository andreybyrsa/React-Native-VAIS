import { ColorsType } from '../colors/colors'
import { FlexAlignType } from 'react-native'

interface PositionProps {
  position?: 'absolute' | 'relative'
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

interface FixedSizeProps {
  size?: number
}

interface PaddingProps {
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  paddingLeft: number
}

interface BorderProps {
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderColor?: ColorsType
  borderRadius?: number
  borderWidths?: number[]
}

interface TypographyProps {
  fontSize?: number | string
  fontWeight?: number | string
  lineHeight: number | string
}

interface FlexibleProps {
  display?: 'flex' | 'none'
  alignItems?: FlexAlignType
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: number
}

export type {
  PositionProps,
  PaddingProps,
  BorderProps,
  FixedSizeProps,
  FlexibleProps,
  TypographyProps,
}
