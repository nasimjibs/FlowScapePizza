import {API_GET_GROUPS} from  '../actions/action_type';

const initialState = [];

 export default function(state = initialState, action){

   switch (action.type) {
     case API_GET_GROUPS:
       return Object.assign(state,action.data);
   }
 return state;
}
