import React, { Component } from 'react';
import PizzaList from '../containers/pizza_list';
import SelectedPizzas from '../containers/selected_pizzas';
//import OrderPane from '../containers/order_pane';

export default class App extends Component {
  render() {
    return (
      <div>
        <PizzaList/>
        <SelectedPizzas />
      </div>
    );
  }
}
