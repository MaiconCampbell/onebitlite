import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#151515',
  },
  statusBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  progress: {
    width: 250,
    height: 8,
    borderRadius: 10
  },
})

export default styles