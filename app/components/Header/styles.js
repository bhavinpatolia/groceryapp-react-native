import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    '@media ios': {
      paddingTop: 20,
    },
    flexDirection: 'row',
    flex: 1
  },
  button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    width: 18,
  },
  textInput: {
    borderRadius: 5,
    height: 30,
    backgroundColor: '$lightGray',
    flex: 4,
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    textAlign: 'center'
  },
  cartTextView: {
    overflow: 'hidden', 
    backgroundColor: '$orange', 
    borderRadius: 8, 
    height: 18, 
    width:18, 
    alignItems:'center', 
    bottom: 10
  },
  cartText: {
    color: '$white', 
    fontWeight: 'bold'
  }
});