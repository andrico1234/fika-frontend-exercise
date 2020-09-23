import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/home/home.screen';
import {MoviesScreen} from './src/screens/movies/movies.screen';
import {GenresScreen} from './src/screens/genres/genres.screen';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="FikaSearch" component={HomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Genres" component={GenresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
