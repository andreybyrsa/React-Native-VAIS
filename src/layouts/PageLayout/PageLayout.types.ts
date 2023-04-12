import React from 'react'
import { ViewStyle } from 'react-native'

interface PageLayoutProps {
  style?: ViewStyle
  headerStyle?: ViewStyle
  contentStyle?: ViewStyle
  footerStyle?: ViewStyle

  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode

  scroll?: boolean
}

export default PageLayoutProps
