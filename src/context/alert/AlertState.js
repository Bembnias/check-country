import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
  NEW_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alert and remove after 3400 miliseconds
  const newAlert = (msg) => {
    dispatch({
      type: NEW_ALERT,
      payload: { msg }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3400);
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        newAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;