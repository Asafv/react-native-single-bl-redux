import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MovieList from '../components/MovieList';

import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from "redux-logic-layer";
import { useAppSelector, useAppDispatch } from '../App';

const { userTyping, tvShowSelected } = searchActions;

const MovieListScreen = ({ navigation }) => {

  const movies = useSelector(({ search: { shows } }) => shows);
  const dispatcher = useDispatch();

  const appDispatcher = useAppDispatch();
  const count = useAppSelector(({ count }) => count);
  console.log('count = ', count);

  const handleSearchTermChange = (query) => {
    setTerm(query);
    dispatcher(userTyping({ query }));
    appDispatcher({ type: 'type1' });
  };

  const handleOnItemPress = async (item) => {
    dispatcher(tvShowSelected({ id: item.id }));
    navigation.navigate('MovieDetails', { title: item.name });
  }

  const [term, setTerm] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SearchBar
        placeholder="movie name..."
        onChangeText={handleSearchTermChange}
        value={term}
      />
      <MovieList
        movies={movies}
        handleOnItemPress={handleOnItemPress}
      />
    </View>
  );
};

export default MovieListScreen;