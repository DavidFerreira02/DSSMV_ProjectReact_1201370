import HomeScreen from './Screens/HomeScreen';
import ListarLivros from './Screens/ListarLivros';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetLivro from './Screens/GetLivro';
import React, {Component} from 'react';
import UpdateLivro from './Screens/UpdateLivro';
import CreateReview from './Screens/CreateReview';
import ListReview from './Screens/ListReview';
import Reviews from './Screens/Reviews';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="ListarLivros" component={ListarLivros} />
          <Stack.Screen name="GetLivro" component={GetLivro} />
          <Stack.Screen name="UpdateLivro" component={UpdateLivro} />
          <Stack.Screen name="CreateReview" component={CreateReview} />
          <Stack.Screen name="ListReview" component={ListReview} />
          <Stack.Screen name="Reviews" component={Reviews} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
