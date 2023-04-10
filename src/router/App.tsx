import router from './router'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function App() {
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
