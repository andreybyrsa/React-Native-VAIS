import Button from './src/components/Button'
import Footer from './src/layouts/Footer'
import Header from './src/layouts/Header'
import PageLayout from './src/layouts/PageLayout'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <PageLayout
      header={
        <Header
          leftSideSlot={
            <View>
              <Text style={{ fontSize: 22 }}>DevPage</Text>
            </View>
          }
          rightSideSlot={
            <View>
              <Text style={{ fontSize: 22 }}>Developing</Text>
            </View>
          }
        />
      }
      footer={
        <Footer><Button>123</Button></Footer>
      }
    >
      <Button type='secondary'>321</Button>
      <Button type='secondary'>321</Button>

    </PageLayout>
  )
}
