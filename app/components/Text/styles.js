import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  titleView: {
    flex: 2
  },
  productTitle: {
    fontSize: 22,
    color: '$darkGray',
    textAlign: 'center'
  },
  productCategory: {
    fontSize: 12,
    color: '$darkGray',
    textAlign: 'center',
    paddingBottom: 5
  },
  priceView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  productActualPriceText: {
    fontSize: 18,
    color: '$darkGray',
    fontWeight: 'bold',
    paddingRight: 5
  },
  productPreviousPriceText: {
    fontSize: 14,
    color: '$darkGray',
    textDecorationLine :'line-through'
  },
  descriptionView: {
    flex: 4,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingTop: 10
  },
  descriptionTitle: {
    fontSize: 20,
    color: '$darkGray',
    alignItems: 'flex-start',
    paddingLeft: 25
  },
  descriptionText: {
    fontSize: 14,
    color: '$darkGray',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    lineHeight: 20
  }
});