import { Meteor } from 'meteor/meteor';
import { getCurrency } from '../imports/server/init';
import { Currencies } from '../imports/api/currencies';


Meteor.startup(() => {
  Meteor.publish('currencies', () => {
      return Currencies.find({}, {limit: 1,sort: {$natural:-1}});
  });


  let interval = async () => {
    let btc = await getCurrency('BTC'),
        eth = await getCurrency('eth');
    console.log(btc, eth);
    Currencies.insert({btc, eth, date : new Date()});
  };

  setInterval(interval, 1000*15);
  interval();
});