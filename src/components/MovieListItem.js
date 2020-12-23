import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

 const MovieListItem = ({ item }) => {
  // const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
  // const itemMovie = { ...item };
  const { image, id, name, score } = item;
  return (
    <Pressable onPress={() => {
      console.log('press button');
      // navigation.navigate('MovieDetails', { itemMovie });
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: image }}
        />
        <Text style={{
          left: 30,
          color: 'yellow',
          fontSize: 20
        }}>{name}</Text>
        <Text style={{
          color: 'blue',
          fontSize: 20
        }}>{score}</Text>
      </View >
    </Pressable>
  )
};

export default MovieListItem;