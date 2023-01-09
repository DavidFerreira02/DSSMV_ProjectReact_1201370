import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import {
  AppRegistry,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default function UpdateLivro() {
  const [isbn, setIsbn] = useState([]);
  const [stock, setStock] = useState([]);
  const updateLivro = () => {
    fetch(
      `http://193.136.62.24/v1/library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/${isbn}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({stock: stock}),
      },
    )
      .then(res => {
        console.log({isbn});
        console.log({stock});
        console.log(res.status);
        console.log(res.headers);
        return res;
      })
      .then(
        result => {
          console.log('Resultado:' + JSON.stringify(result));
        },
        error => {
          console.log('Erro');
          console.log(error);
        },
      )
      .catch(error => alert(error));
  };
  return (
    <View>
      <TextInput
        placeholder="ISBN"
        style={styles.input}
        value={isbn}
        onChangeText={value => setIsbn(value)}
      />
      <TextInput
        placeholder="stock"
        style={styles.input}
        value={stock}
        onChangeText={value => setStock(value)}
      />
      <Button title="Inserir" onPress={() => updateLivro(isbn)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  input: {
    alignSelf: 'stretch',
    margin: 8,
    padding: 4,
  },
});
