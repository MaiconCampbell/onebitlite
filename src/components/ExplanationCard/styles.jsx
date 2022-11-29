import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    width: 350,
    borderRadius: 25,
    padding: 30
  },
  title: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16
  },
  explanationContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  description: {
    color: '#FFF',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  mind: {
    color: '#90B7F3',
    fontWeight: 'bold'
  },
  money: {
    color: '#85BB65',
    fontWeight: 'bold'
  },
  body: {
    color: '#FF0044',
    fontWeight: 'bold'
  },
  fun: {
    color: '#FE7F23',
    fontWeight: 'bold'
  }
})

export default styles