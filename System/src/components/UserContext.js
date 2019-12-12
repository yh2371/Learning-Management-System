import React, { createContext, useReducer, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.data;
    case 'clear':
      return {
        isLoggedIn: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isLoggedIn: false, user: {} });
  const fetch = require('isomorphic-unfetch');
  const dispatchProxy = (action) => {
    switch (action.type) {
      case 'fetch':
        const response = await fetch('/api/session');
        return response
          .then(res => ({
            isLoggedIn: res.data.data.isLoggedIn,
            user: res.data.data.user,
          }))
          .then(({ isLoggedIn, user }) => {
            dispatch({
              type: 'set',
              data: { isLoggedIn, user },
            });
          });
      default:
        return dispatch(action);
    }
  };
  useEffect(() => {
    dispatchProxy({ type: 'fetch' });
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch: dispatchProxy }}>
      { children }
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
