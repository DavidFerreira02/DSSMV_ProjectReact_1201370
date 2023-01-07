import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';

const URL =
  'http://193.136.62.24/v1/library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book';

const ListarLivros = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [book, setBook] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json()) // get response, convert to json
      .then(json => {
        setData(json);
        setBook(json.book);
        setTitle(json.title);
      })
      .catch(error => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Title from URL */}
          <Text style={styles.title}>Books</Text>
          {/* Display each movie */}
          <View style={{borderBottomWidth: 1, marginBottom: 12}} />
          <FlatList
            data={data}
            book={book}
            keyExtractor={({isbn}, index) => isbn}
            renderItem={({item}) => (
              <View style={{paddingBottom: 10}}>
                <Text style={styles.movieText}>
                  {item.book.isbn},{item.book.title},{item.stock},
                  {item.book.numberOfPages}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

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

export default ListarLivros;

