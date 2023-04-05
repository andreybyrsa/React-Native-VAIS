import {
  BorderProps,
  FixedSizeProps,
  FlexibleProps,
  PaddingProps,
  PositionProps,
  TypographyProps,
} from './mixins.types'

export const position = ({
  position,
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
}: PositionProps) => {
  return {
    position,
    top,
    right,
    bottom,
    left,
  }
}

export const fixedWidth = ({ size }: FixedSizeProps) => {
  return {
    width: size,
    minWidth: size,
    maxWidth: size,
  }
}

export const fixedHeight = ({ size }: FixedSizeProps) => {
  return {
    height: size,
    minHeight: size,
    maxHeight: size,
  }
}

export const padding = ({ paddingTop, paddingRight, paddingBottom, paddingLeft }: PaddingProps) => {
  return {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }
}

export const border = ({
  borderStyle = 'solid',
  borderColor = 'color-border-primary_enable',
  borderRadius = 0,
  borderWidths = [0],
}: BorderProps) => {
  let currentBorderWidths
  if (borderWidths.length === 1) {
    currentBorderWidths = borderWidths
  } else if (borderWidths.length === 2) {
    currentBorderWidths = {
      borderTopWidth: borderWidths[0],
      borderBottomWidth: borderWidths[1],
    }
  } else if (borderWidths.length === 3) {
    currentBorderWidths = {
      borderTopWidth: borderWidths[0],
      borderLeftWidth: borderWidths[1],
      borderRightWidth: borderWidths[1],
      borderBottomWidth: borderWidths[2],
    }
  } else {
    currentBorderWidths = {
      borderTopWidth: borderWidths[0],
      borderLeftWidth: borderWidths[1],
      borderBottomWidth: borderWidths[2],
      borderRightWidth: borderWidths[3],
    }
  }

  return {
    borderStyle,
    borderColor,
    borderRadius,
    ...currentBorderWidths,
  }
}

export const typography = ({ fontSize, fontWeight, lineHeight }: TypographyProps) => {
  return {
    fontSize,
    fontWeight,
    lineHeight,
  }
}

export const flexible = ({
  display = 'flex',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  gap = 0,
}: FlexibleProps) => {
  return {
    display,
    flexDirection,
    flexWrap,
    alignItems,
    justifyContent,
    gap,
  }
}
