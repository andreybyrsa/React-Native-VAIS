import store from '../store'
import router from './router'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
