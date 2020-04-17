import {
    NEW_ALERT,
    REMOVE_ALERT
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case NEW_ALERT:
        return action.payload;
      case REMOVE_ALERT:
        return null;
      default:
        return state;
    }
  }