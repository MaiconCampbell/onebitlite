import styles from './styles'

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function DefaultButton({ buttonText, handlePress, width, heigth }) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: heigth }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export { DefaultButton }