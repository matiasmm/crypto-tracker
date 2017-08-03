// app/index.js
import Meteor, { createContainer } from 'react-native-meteor';
import MainView from '../components/MainView';

const SERVER_URL = 'ws://192.168.1.2:3000/websocket';
Meteor.connect(SERVER_URL);

export default createContainer((params) => {
  
  const handle = Meteor.subscribe('currencies');
  const currencies = Meteor.collection('currencies').find() || [];
  
  return {
    currencies: currencies,
  };
}, MainView);
