import MainNavigator from '../config/router';
import React, { Component } from 'react';

export default class MainView extends Component {
    render() {
      return (
        <MainNavigator screenProps={{currencies: this.props.currencies}} />
      )
    }
}