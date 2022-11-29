import styles from './styles.jsx'

import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import DefaultButton from '../../components/DefaultButton'
import { ExplanationCard } from '../../components/ExplanationCard'

function AppExplanation() {
  const navigation = useNavigation()

  const handleNavHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Antes, deixe {'\n'} eu te explicar ...
          </Text>
          <ExplanationCard/>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavHome}
            width={250}
            heigt={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export { AppExplanation }