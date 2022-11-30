import styles from './styles'

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function CreateHabit({ habitArea, borderColor }) {

  function handleCreate() {
    console.log(`habito ${habitArea}`)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderColor: borderColor }]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar meta {habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
      </Text>
    </TouchableOpacity>
  )
}

export { CreateHabit }