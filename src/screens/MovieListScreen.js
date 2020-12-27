import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import MovieList from '../components/MovieList';
import { searchActions } from "redux-logic-layer";

const { userTyping, tvShowSelected } = searchActions;

const MovieListScreen = ({ navigation }) => {

  const [term, setTerm] = useState('');
  const movies = useSelector(({ search: { shows } }) => shows);
  const dispatcher = useDispatch();

  const handleSearchTermChange = (query) => {
    setTerm(query);
    dispatcher(userTyping({ query }));
  };

  const handleOnItemPress = async (item) => {
    dispatcher(tvShowSelected({ id: item.id }));
    navigation.navigate('MovieDetails', { title: item.name });
  }

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