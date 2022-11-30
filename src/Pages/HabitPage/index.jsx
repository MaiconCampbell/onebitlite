import styles from "./styles"

import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

function HabitPage() {
  const navigation = useNavigation()

  return (
    <View styles={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity
            styles={styles.backPageBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/icons/arrowBack.png')}
              style={styles.arrowBack}
            />
            <View style={styles.mainContent}></View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export { HabitPage }
