import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Currencies } from '../api/currencies';


class App extends React.Component {

    constructor() {
        super();
        this.state =  {
            'word': 'matias'
        };
    }

    click() {
        console.log(this);
        this.setState({'word': 'dsfa'});
    }

    render() {
        return (
            <div>
                <ul>{this.props.currencies.map((currency) => {
                       return <li key={currency._id}>{currency.btc}</li>;
                    })}</ul>
            </div>
        )
    }
}

export default FooContainer = createContainer(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted

  const handle = Meteor.subscribe('currencies');

  return {
    listLoading: ! handle.ready(),
    currencies: Currencies.find().fetch()
  };
}, App);
