import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {Provider} from './AppContext';
import reducer from './Reducer';

const initialState = {
  users: {
    loading: true,
    error: null,
    data: [],
  },
  todos: {
    userid: 0,
    loading: false,
    error: null,
    data: [],
  },
};

const user_labels = {
  id: 'ID',
  name: 'Name',
  username: 'User Name',
  email: 'Email',
};

const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider
      value={{
        state,
        user_labels,
        dispatch,
      }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
