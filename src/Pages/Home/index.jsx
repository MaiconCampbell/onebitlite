import styles from './styles.jsx'

import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, Text } from 'react-native'
import { LifeStatus } from '../../components/Common/LifeStatus'


function Home() {
  const navigation = useNavigation()

  function handleNavExplanation () {
    navigation.navigate('AppExplanation')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.dailyChecks}>❤ 20 dias - ✓ 80 checks</Text>
          <LifeStatus />
        </View>
        <Text
          style={styles.explanationText}
          onPress={() => { handleNavExplanation() }}
        >
          Ver explicaçã novamente
        </Text>
      </ScrollView>
    </View>
  )
}

export { Home }