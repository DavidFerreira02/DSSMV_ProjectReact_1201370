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
import {useNavigation} from '@react-navigation/native';

export default function ListReview({navigation}) {
  const [isbn, setIsbn] = useState([]);

  return (
    <View>
      <TextInput
        placeholder="ISBN"
        style={styles.input}
        value={isbn}
        onChangeText={value => setIsbn(value)}
      />
      <Button
        title="Procurar"
        onPress={() => navigation.navigate('Reviews', {isbn: isbn})}
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
