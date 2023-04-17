import PageLayoutStyles from './PageLayout.styles'
import PageLayoutProps from './PageLayout.types'
import { SafeAreaView, ScrollView, View } from 'react-native'

function PageLayout({
  style,
  headerStyle,
  contentStyle,
  footerStyle,

  header,
  children,
  footer,

  scroll = true,
  footerIsNavigation = false,
}: PageLayoutProps) {
  return (
    <View style={[PageLayoutStyles['page-layout'], style]}>
      <SafeAreaView style={[PageLayoutStyles['page-layout__header'], headerStyle]}>
        {header}
      </SafeAreaView>
      <ScrollView scrollEnabled={scroll}>
        <View style={[PageLayoutStyles['page-layout__content'], contentStyle]}>{children}</View>
      </ScrollView>
      <SafeAreaView
        style={[
          PageLayoutStyles['page-lyaout__footer'],
          footerIsNavigation && PageLayoutStyles['page-lyaout__footer-navigation'],
          footerStyle,
        ]}
      >
        {footer}
      </SafeAreaView>
    </View>
  )
}

export default PageLayout
