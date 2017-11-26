export function selectPizza(pizza){
  //action creator needs to return an action, an object with type property
  return {
    type: 'PIZZA_SELECTED',
    payload: pizza
  }
}
