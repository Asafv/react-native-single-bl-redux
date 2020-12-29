import React from 'react';
import MovieListScreen from '../screens/MovieListScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { NavigationContainer } from '@react-navigation/native'
import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';
import { showInfoActions } from "redux-logic-layer";
import { useDispatch } from "react-redux";

const Stack = createStackNavigator();
const { setShowInfo } = showInfoActions;

const Router = () => {
  const dispatcher = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
      >
        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{
            title: 'Shows List',
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
          options={({ route, navigation }) => ({
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
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  dispatcher(setShowInfo({ show: null }));
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;