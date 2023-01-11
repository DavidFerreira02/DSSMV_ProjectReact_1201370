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
import {Checkbox} from 'react-native-material-design';
import SelectList from 'react-native-dropdown-select-list/components/SelectList';

const URL =
  'http://193.136.62.24/v1/library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/';

export default function CreateReview() {
  const [isbn, setIsbn] = useState([]);
  const [desc, setDesc] = useState([]);
  const [id, setID] = useState([]);
  const [rec, setRec] = useState('');

  const options = [
    {key: 'true', value: 'Recomendo'},
    {key: 'false', value: 'Não Recomendo'},
  ];
  const createLivro = () => {
    fetch(`http://193.136.62.24/v1/book/${isbn}/review?userId=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({recommended: rec, review: desc}),
    })
      .then(res => {
        console.log('ISBN: ' + isbn);
        console.log('Recommended: ' + rec);
        console.log('Review: ' + desc);
        console.log(res.status);
        console.log(res.headers);
        return res;
      })
      .then(
        result => {
          console.log('Resultado');
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
        placeholder="Descrição"
        style={styles.input}
        value={desc}
        onChangeText={value => setDesc(value)}
      />
      <TextInput
        placeholder="User ID (default: Wonderful User)"
        style={styles.input}
        value={id}
        onChangeText={value => setID(value)}
      />
      <SelectList
        data={options}
        value={rec}
        setSelected={setRec}
        defaultOption={{key: 'true', value: 'Recomendo'}}
      />
      <Button title="Criar comentário" onPress={() => createLivro(isbn)} />
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
