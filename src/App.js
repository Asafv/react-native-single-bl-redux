import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux-logic-layer';
import MovieListScreen from './screens/MovieListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          mode='modal'
        >
          <Stack.Screen
            name="MovieList"
            component={MovieListScreen}
            options={{
              title: 'Movies List',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#FFD700',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#FFD700',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
