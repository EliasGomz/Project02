import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 19,
  },
  container2: {
    flexDirection: 'row',
  },
  btn1: {
    backgroundColor: "#000000",
    height: 64,
    width: 144,
    borderRadius: 50,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    backgroundColor: "#000000",
    height: 64,
    width: 144,
    borderRadius: 50,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn:{
    fontSize: 30,
    color: "#FFFFFF",
    fontStyle: 'italic',
  },
  list1:{
    width: 100,
    height: 100,
    marginBottom: 10, 
    marginLeft: 250,
    
  },
  list2:{
    width: 100,
    height: 50,
    marginBottom: 10, 
    marginLeft: 30,
  },
  Text:{
    textDecorationColor: '#000000',
    fontSize: 14.1,
    fontStyle: 'italic',
  },
})

export default styles;