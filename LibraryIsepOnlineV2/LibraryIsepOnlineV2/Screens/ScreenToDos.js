import React from 'react';
import {View, StyleSheet} from 'react-native';
import UsersList from '../components/UsersList';

const ScreenToDos = () => {
  return (
    <View style={styles.container}>
      <UsersList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ScreenToDos;
