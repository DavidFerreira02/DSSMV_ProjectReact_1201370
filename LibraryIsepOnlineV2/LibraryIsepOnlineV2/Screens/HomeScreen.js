import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Button, View, SafeAreaView} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Button
          title="Listar livros"
          onPress={() => navigation.navigate('ListarLivros')}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Button
          title="Inserir um livro"
          onPress={() => navigation.navigate('GetLivro')}
          style={{marginTop: 50}}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Button
          title="Alterar livro"
          onPress={() => navigation.navigate('UpdateLivro')}
          style={{marginTop: 50}}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Button
          title="Criar um comentário"
          onPress={() => navigation.navigate('CreateReview')}
          style={{marginTop: 50}}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Button
          title="Listar comentários"
          onPress={() => navigation.navigate('ListReview')}
          style={{marginTop: 50}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
