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
}: PageLayoutProps) {
  return (
    <SafeAreaView style={[PageLayoutStyles['page-layout'], style]}>
      <SafeAreaView style={[PageLayoutStyles['page-layout__header'], headerStyle]}>
        {header}
      </SafeAreaView>
      <ScrollView style={[PageLayoutStyles['page-layout__content'], contentStyle]}>
        {children}
      </ScrollView>
      <SafeAreaView style={[PageLayoutStyles['page-lyaout__footer'], footerStyle]}>
        {footer}
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default PageLayout
