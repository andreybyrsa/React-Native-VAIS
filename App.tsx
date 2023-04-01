import Button from './src/components/Button'
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
    >
      <Button>123</Button>
      <Button>321</Button>
    </PageLayout>
  )
}
