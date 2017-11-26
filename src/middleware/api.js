import { API_CALL, API_GET_GROUPS } from '../actions/action_type';
import {fetchPizzaByGroup} from '../actions/fetch_pizza_menu_action';



import axios from 'axios';


export default (store) => (next) => (action) => {

//console.log('middleware');

    if (action.type !== API_CALL) {
        return next(action);
    }


//console.log('inside middleware');
    const host = 'http://13.74.17.187:9000';
    const { apiType, method, path} = action;
    let request = '';
    switch (method) {
      case 'POST':
        request = axios.post(host+path);
        break;
      default:
        request = axios.get(host+path);
    }
      //const request = axios.get(host+path);
      request.then(function (response) {
        const data = response.data;
        const successAction = Object.assign(action,{type:apiType, data});
        next(successAction);
        if(apiType === API_GET_GROUPS){
//          console.log(data);
            data.forEach((entry)=>{
              store.dispatch(fetchPizzaByGroup(entry.id));
//              console.log("calling pizzas fro group", entry.id);

            });
        }
    //    console.log(data);
      })
      .catch(function (error) {
      //  console.log(error);
      });



    const {pizzaGroups} = store.getState();
  }
