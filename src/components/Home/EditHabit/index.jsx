import styles from './styles'

import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

function EditHabit({ habit, frequency, habitArea, checkColor }) {

  function handleEdit() {
    console.log('Edição habito')
  }

  // Habito finalizado
  function handleCheck() {
    console.log(`Ckeck do ${habitArea}`)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{habit}</Text>
        <Text style={styles.habitFrequency}>{frequency}</Text>
      </View>

      <TouchableOpacity
        style={[styles.check, { borderColor: checkColor }]}
        onPress={handleCheck}
      />
    </TouchableOpacity>
  )
}

export { EditHabit }