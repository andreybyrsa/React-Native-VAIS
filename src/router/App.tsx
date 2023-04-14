import AppLoader from '../components/Loaders/AppLoader'
import router from './router'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { useState } from 'react'

const Stack = createNativeStackNavigator()

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const [fonts] = useFonts({
    'Montserrat-Bold': require('../../assets/styles/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../assets/styles/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('../../assets/styles/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../assets/styles/fonts/Montserrat-Regular.ttf'),
  })

  setTimeout(() => setIsLoaded(true), 2000)

  if (!isLoaded) {
    return <AppLoader />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {router.map((elem) => (
          <Stack.Screen
            key={elem.id}
            name={elem.path}
            component={elem.component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
