import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AppContext from '../context/AppContext';

const TodosList = () => {
  const {state} = useContext(AppContext);
  const {todos} = state;
  const {loading, error, data} = todos;
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
          <View style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={styles.item}>
                  <Text>{item.title}</Text>
                </View>
              )}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.item}>
            <Text>No Data ....</Text>
          </View>
        );
      }
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 10,
  },
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
export default TodosList;
