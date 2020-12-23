import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
// import Storage from './Storage';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import MovieListItem from './MovieListItem';
import { searchActions, showInfoActions } from "redux-logic-layer";

const { tvShowSelected, userTyping } = searchActions;

const MovieList = ({ navigation, children }) => {
  const [term,setTerm] = useState('');
  const movies = useSelector(({ search: { shows } }) => shows);
  const dispatcher = useDispatch();
  
  const handleSearchTermChange = (query) => {
    setTerm(query);
    dispatcher(userTyping({ query }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SearchBar
        placeholder="Type here..."
        onChangeText={handleSearchTermChange}
        value={term}
      />
      <FlatList
        data={movies}
        renderItem={MovieListItem}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default MovieList;