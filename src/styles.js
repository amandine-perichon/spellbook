import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20,
  },
  titleContainer: {
    flex: 0.1,
    backgroundColor: '#91eadd',
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  listContainer: {
    flex: 0.8,
    backgroundColor: '#c97cc9',
  },
  item: {
    padding: 10,
    borderWidth: 0.5,
  },
  add: {
    flex: 0.1,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor: '#84aae8'
  }
})
