
import {API_GET_PIZZAS} from  '../actions/action_type';

const initialState = [];

export default function(state = initialState, action){

  let currentState = state;
  switch (action.type) {
     case API_GET_PIZZAS:
      const newPizzaList = currentState.concat(action.data);
      return newPizzaList;
  }

   return state;
}
