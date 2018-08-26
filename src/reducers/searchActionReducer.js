import * as actions from '../actions/actionTypes';

export default (state = {users: null}, action) => {
    switch (action.type) {
     case 'FETCH_USERS':
      return {...state,
       users: action.data
      }
     default:
      return state
    }
   }