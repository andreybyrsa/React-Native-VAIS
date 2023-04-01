import PageLayoutStyles from './PageLayout.styles'
import PageLayoutProps from './PageLayout.types'
import { SafeAreaView, View } from 'react-native'

function PageLayout({
  style,
  headerStyle,
  contentStyle,
  footerStyle,

  header,
  children,
  footer,
}: PageLayoutProps) {
  return (
    <SafeAreaView style={[PageLayoutStyles['page-layout'], style]}>
      <View style={[PageLayoutStyles['page-layout__header'], headerStyle]}>{header}</View>
      <View style={[PageLayoutStyles['page-layout__content'], contentStyle]}>{children}</View>
      <View style={[PageLayoutStyles['page-lyaout__footer'], footerStyle]}>{footer}</View>
    </SafeAreaView>
  )
}

export default PageLayout
