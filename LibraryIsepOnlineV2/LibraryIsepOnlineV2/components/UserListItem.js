import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  URL_API,
  fetchUserTodosStarted,
  deleteUserTodos,
  fetchUserTodos,
} from '../context/Actions';
import AppContext from '../context/AppContext';
import TodosList from './TodosList';

const UserListItem = props => {
  const {state, user_labels, dispatch} = useContext(AppContext);
  const {todos} = state;
  const {userid} = todos;
  const {item} = props;
  const handleOnClick = id => {
    if (userid !== id) {
      dispatch(fetchUserTodosStarted(id));
      const url = `${URL_API}/posts?userId=${id}`;
      const request = {};
      fetchUserTodos(url, request, dispatch);
    } else {
      dispatch(deleteUserTodos());
    }
  };
  if (userid !== item.id) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => handleOnClick(item.id)}>
          <Text>
            {user_labels.id} : {item.id}{' '}
          </Text>
          <Text>
            {user_labels.name} : {item.name}{' '}
          </Text>
          <Text>
            {user_labels.username}: {item.username}{' '}
          </Text>
          <Text>
            {user_labels.email} : {item.email}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.item}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => handleOnClick(item.id)}>
            <Text>
              {user_labels.id} : {item.id}{' '}
            </Text>
            <Text>
              {user_labels.name} : {item.name}{' '}
            </Text>
            <Text>
              {user_labels.username}: {item.username}{' '}
            </Text>
            <Text>
              {user_labels.email} : {item.email}{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <TodosList />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
});
export default UserListItem;
