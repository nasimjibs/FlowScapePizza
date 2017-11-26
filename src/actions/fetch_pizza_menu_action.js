import { API_CALL, API_GET_GROUPS, API_GET_PIZZAS } from './action_type';


const basePath = '/pizza-flow/menu';

export function fetchPizzaGroup(){

  return {
    type: API_CALL,
    apiType:  API_GET_GROUPS,
    method: 'GET',
    path: basePath + '/groups'

  }
}

export function fetchPizzaByGroup(groupId){

  return {
    type: API_CALL,
    apiType:  API_GET_PIZZAS,
    method: 'GET',
    path: basePath + '/groups/'+groupId+'/pizzas'

  }
}
