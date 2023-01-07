import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {URL_API, fetchUsersStarted, fetchUsers} from '../context/Actions';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import UserListItem from './UserListItem';

const UsersList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {users} = state;
  const {loading, error, data} = users;
  useEffect(() => {
    dispatch(fetchUsersStarted());
    const url = `${URL_API}/users`;
    const request = {};
    fetchUsers(url, request, dispatch);
  }, [dispatch]);
  if (loading === true) {
    return (
      <View style={styles.item}>
        <Text>Loading ....</Text>
      </View>
    );
  } else {
    if (error !== null) {
      return (
        <View style={styles.item}>
          <Text>Error ....</Text>
        </View>
      );
    } else {
      if (data.length > 0) {
        return (
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <UserListItem item={item} />}
          />
        );
      } else {
        return (
          <View style={styles.item}>
            <Text>No data ....</Text>
          </View>
        );
      }
    }
  }
};
const styles = StyleSheet.create({
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
});
export default UsersList;
