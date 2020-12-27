import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'

const MovieListItem = ({ item }, onPress) => {
  
  const handleOnPress = (item) => {
    onPress(item);
  }

  const { image, id, name, score } = item;
  return (
    <Pressable onPress={() => handleOnPress(item)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: image }}
        />
        <View style={{ paddingLeft: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{
            color: 'yellow',
            fontSize: 24,
            flex: 1,
          }} ellipsizeMode='tail' numberOfLines={1}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='star' color='#FFD700' type='font-awesome' />
            <Text style={{
              color: '#FFD700',
              fontSize: 20,
              paddingLeft: 5,
            }}>{Math.round(score * 10) / 10}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
};

export default MovieListItem;