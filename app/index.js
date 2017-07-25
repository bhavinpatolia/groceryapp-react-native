import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';

import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $inputText: '#797979',
  $orange: '#FF6347',
  $darkGray: '#808080',
  $borderColor: '#bbbbbb'
});

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
