import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Book from './Books';
const Books = props => {
  const [isLoading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    fetch(
      'http://193.136.62.24/v1/library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/',
    )
      .then(response => response.json())
      .then(json => setBooks(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getBooks();
  }, []);
  return (
    <View style={{padding: 20}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={({isbn}) => isbn.toString()}
          renderItem={({item}) => <Text>{item.isbn} </Text>}
        />
      )}
    </View>
  );
};
export default Books;
