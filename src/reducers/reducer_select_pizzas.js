import { ADD_PIZZA, SUBTRACT_PIZZA } from '../actions/action_type';


const initialState = {
  items:[],
  expectedPrice : 0
};

export default function(state = initialState, action){
  const {items, expectedPrice}= state;
  let currentPrice;
  let updateItems =[];
  let orderMap = new Map(items);

switch (action.type) {


  case ADD_PIZZA:
    currentPrice = expectedPrice + action.price;

    if(orderMap.has(action.pizzaID)){
      let multiplicity = orderMap.get(action.pizzaID);
      orderMap.set(action.pizzaID, multiplicity + 1);
    } else{
      orderMap.set(action.pizzaID, 1);
    }
    for (var [pizzaID, number] of orderMap.entries()) {
      updateItems.push([pizzaID, number]);

    }

    return Object.assign(state,{items: updateItems, expectedPrice:currentPrice});
    break;

  case SUBTRACT_PIZZA:
    currentPrice = expectedPrice - action.price;

    if(orderMap.has(action.pizzaID)){
      let multiplicity = orderMap.get(action.pizzaID);
      let updateMultiplicity = (multiplicity > 1) ? multiplicity-1 : 0;
      if(updateMultiplicity > 0 ){
          orderMap.set(action.pizzaID, updateMultiplicity);
      } else {
          orderMap.delete(action.pizzaID);
      }
    }

    for (var [pizzaID, number] of orderMap.entries()) {
      updateItems.push([pizzaID, number]);

    }

    return Object.assign(state,{items: updateItems, expectedPrice:currentPrice});
    break;
  }
  return state;
}
