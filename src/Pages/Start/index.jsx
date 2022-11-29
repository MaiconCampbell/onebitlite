import styles from './styles.jsx'

import { Image, ScrollView, Text, View } from 'react-native'
import { LifeStatus } from '../../components/LifeStatus/index.jsx'

function Start() {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/icons/logo3.png')}
            style={styles.logo}
          />
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export { Start }