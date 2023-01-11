import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

export default function Reviews({route, navigation}) {
  const [data, setData] = useState([]);
  const {book} = route.params;

  console.log('Navigation: ' + navigation);
  console.log('book: ' + book);

  fetch(`http://193.136.62.24/v1/book/${book}/review?limit=50`, {
    method: 'GET',
  })
    .then(response => {
      response.json();
    })
    .then(json => {
      setData(json);
    })
    .catch(error => alert(error));

  return (
    <View>
      {/* Title from URL */}
      <Text style={styles.title}>Reviews</Text>
      {/* Display each movie */}
      <View style={{borderBottomWidth: 1, marginBottom: 12}} />
      <FlatList
        data={data}
        keyExtractor={({isbn}, index) => isbn}
        renderItem={({item}) => (
          <View style={{paddingBottom: 10}}>
            <Text style={styles.movieText}>
              Review ID: {item.id}
              {'\n'}
              Recomendação: {item.recommended}
              {'\n'}
              Comentário: {item.review}
              {'\n'}
              User ID: {item.reviewer}
              {'\n'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: '200',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },
});
