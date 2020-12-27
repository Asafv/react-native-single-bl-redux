import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieListItem from './MovieListItem';

const MovieList = ({ movies, handleOnItemPress }) => {
  const selectedShowInfo = useSelector(({ showInfo: { info } }) => info);
  console.log('selectedShowInfo=',selectedShowInfo)
  return (
    
      <FlatList
        data={movies}
        renderItem={(data) => MovieListItem(data, handleOnItemPress)}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />

  );
};

export default MovieList;