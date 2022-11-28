import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Start } from '../Pages/Start'

const Stack = createNativeStackNavigator()

function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{
        headerShown: false
      }} />

      <Stack.Screen name="Start" component={Start} />
    </NavigationContainer>
  )
}

export { AllPages }