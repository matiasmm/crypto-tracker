import { TabNavigator, Image } from 'react-navigation';
import CryptoView from '../components/CryptoView';
import React from 'react';

const MainNavigator = TabNavigator({
  btc: {
    screen: CryptoView,
    navigationOptions: {
      tabBarLabel: 'BTC',
      
    },
  },
  eth: {
    screen: CryptoView,
    navigationOptions: {
      tabBarLabel: 'ETH'
    }
  }
});

export default MainNavigator;
