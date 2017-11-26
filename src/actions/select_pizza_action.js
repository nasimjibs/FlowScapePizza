import { ADD_PIZZA, SUBTRACT_PIZZA } from './action_type';

export function addPizza(pizzaID, price){
  return {
    type: ADD_PIZZA,
    pizzaID,
    price
  }
}

export function subtractPizza(pizzaID){
  return {
    type: SUBTRACT_PIZZA,
    pizzaID,
    price
  }
}
