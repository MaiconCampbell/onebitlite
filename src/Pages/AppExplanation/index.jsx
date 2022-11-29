import styles from './styles.jsx'

import React from 'react'
import { ScrollView, View } from 'react-native'
import DefaultButton from '../../components/DefaultButton'

export default function AppExplanation() {
  function handleSetShowHome() {
    console.log("Home navegando")
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Antes, deixe {'\n'} eu te explicar ...
          </Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            heigt={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}
