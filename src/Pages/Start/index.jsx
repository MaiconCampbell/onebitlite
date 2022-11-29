import styles from './styles.jsx'

import { Image, ScrollView, Text, View } from 'react-native'
import { LifeStatus } from '../../components/LifeStatus/index.jsx'
import DefaultButton from '../../components/DefaultButton/index.jsx'
import { useNavigation } from '@react-navigation/native'

function Start() {
  const navigation = useNavigation()

  const handleNavAppExplanation = () => {
    navigation.navigate("AppExplanation")
  }

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

          <DefaultButton 
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            heigt={250}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export { Start }