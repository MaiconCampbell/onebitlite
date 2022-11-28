import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

function Start() {

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../../assets/icons/logo3.png')}
          />
          <Text>
            Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export { Start }