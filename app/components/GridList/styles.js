import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 7
  },
  rowContainer: {
    flex: 1,
    overflow: 'hidden',
    height: 60,
    flexDirection: 'column'
  },
  rowContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20
  },
  separate: {
    height: 0.5,
    backgroundColor: '$borderColor'
  }
  
});