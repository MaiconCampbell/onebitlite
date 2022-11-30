import styles from './styles'

import { Image, Text, View } from 'react-native'

function ExplanationCard() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Atravès deste App você vai consolidar {'\n'} 4 hábitos de áreas fundamentais:
      </Text>

      <View style={styles.explanationContainer}>
        <Image
          source={require('../../../assets/icons/educationIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>Mente: </Text> Hábitos para melhorar sua inteligência/sabedoria
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require('../../../assets/icons/moneyIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}>Financeiro: </Text> Hábitos para te ajudar com controle financeiro
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require('../../../assets/icons/bodyIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}>Corpo: </Text> Hábitos para te deixar {'\n'}
          mais saudável e forte
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require('../../../assets/icons/funIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}>Humor: </Text> Hábitos para controlar stress {'\n'}
          e aumentar felicidade
        </Text>
      </View>
    </View>
  )
}

export { ExplanationCard }