import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Meteor from 'react-native-meteor';


export default class CryptoView extends Component {


 componentWillReceiveProps(newProps) {
   this.imageUrl = '';

   if (!this.props.screenProps.currencies) {
     this.code = '';
   } else {
    this.code = this.props.navigation.state.key;
    this.images = {
      btc: require('../../img/btc.png'),
      eth: require('../../img/eth.png')
    }
    this.imageUrl = this.images[this.code];
   }   
  }

  render() {
    if (!this.props.screenProps.currencies || this.props.screenProps.currencies.length == 0) {
      return (
        <View style={styles.container}>
          <Text>No data</Text>
        </View>
      );
    }
    let last = this.props.screenProps.currencies[0];
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={this.imageUrl}
        />
        <Text>{last[this.code]}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   paddingLeft: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})