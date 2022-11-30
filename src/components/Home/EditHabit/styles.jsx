import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 320,
    backgroundColor: '#151515',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  habitText: {

  },
  habitTitle: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  habitFrequency: {
    color: '#FFF',
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10
  }
})

export default styles