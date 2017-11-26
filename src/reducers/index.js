import { combineReducers } from 'redux';
import SelectedPizzasReducer  from './reducer_select_pizzas';
import PizzaGroupsReducer from './reducer_pizza_groups';
import PizzaReducer from './reducer_pizzas';


const rootReducer = combineReducers({
  pizzas          : PizzaReducer,
  selectedPizzas  : SelectedPizzasReducer,  
  pizzaGroups     : PizzaGroupsReducer

});

export default rootReducer;
