import styles from './styles'

import Lottie from 'lottie-react-native'
import { View } from 'react-native'

function LifeStatus() {

  /*
     * 100 - Máximo
     * 50 - Médio
     * 25 - baixo
     * 00 - Curto (Acabou o game)
     * No bot, temos primeiros Felicidade e depois Saúde XX-XX
  */

  return (
    <View style={styles.container}>
      <Lottie
        source={require("../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
      />

      <Lottie
        source={require("../../assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.financasAnimacao}
      />

      <Lottie
        source={require("../../assets/robot/robot-100-100.json")}
        autoPlay
        loop
        style={styles.roboAnimacao}
      />
    </View>
  )
}

export { LifeStatus }