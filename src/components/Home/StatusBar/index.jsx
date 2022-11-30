import styles from './styles'
import React from 'react'
import { View, Image } from 'react-native'

import { ProgressBar } from 'react-native-paper'

function StatusBar() {

  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/educationIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={1} color={'#90B7F3'} style={styles.progress} />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/moneyIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={0} color={'#85BB65'} style={styles.progress} />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/bodyIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={0} color={'#FF0043'} style={styles.progress} />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/funIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={0} color={'#FE7F23'} style={styles.progress} />
      </View>
    </View>
  )
}

export { StatusBar }