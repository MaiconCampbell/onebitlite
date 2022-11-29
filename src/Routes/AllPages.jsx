import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Start } from '../Pages/Start'
import { AppExplanation } from '../Pages/AppExplanation'

const Stack = createNativeStackNavigator()

function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{
        headerShown: false,
      }}>
        <Stack.Screen name="AppExplanation" component={AppExplanation} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { AllPages }