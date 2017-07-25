import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const dimentions = Dimensions.get('window');

export default EStyleSheet.create({

  rowContainer: {
    overflow: 'hidden',
    width: dimentions.width / 3,
    height: dimentions.height * 7 / 20 - 5,
    borderWidth: 0.3,
    borderColor: '$borderColor',
    flex: 1,
    flexDirection: 'column'
  },
  imageView: {
    flex: 3,
    alignItems: 'center'
  },
  image: {
    width: dimentions.width / 4,
    height: dimentions.height / 7,
  },
  productTitleView: {
    flex: 1.5,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: '$darkGray',
    fontSize: 18
  },
  productCategoryView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    color: '$darkGray',
    fontSize: 14
  },
  ActualPriceView: {
    flex: 1.5,
    justifyContent: 'flex-start'

  },
  PreviousPriceView: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'flex-end'
  },
  PreviousPriceText:{
    color: '$darkGray',
    fontSize: 12,
    textDecorationLine :'line-through',
    paddingRight: 5
  },
  ActualPriceText: {
    alignSelf: 'center',
    fontSize: 16
  }
});