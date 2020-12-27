import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import _ from 'lodash';
const ActorListItem = ({ item }, onPress) => {

  const handleOnPress = (item) => {

  }

  const realName = _.get(item, 'person.name');
  const characterName = _.get(item, 'character.name');
  const imageUri = _.get(item, 'character.image.medium');
  return (
    <Pressable onPress={() => handleOnPress(item)}>
      <View style={{ alignItems: 'center', maxWidth: 180 }}>
        <Image
          style={{ width: 100, height: 150, borderRadius: 5 }}
          source={{ uri: imageUri }}
        />
        <Text
          style={{
            color: 'yellow',
            fontSize: 24,
          }}
          ellipsizeMode='tail'
          numberOfLines={1}>{realName}</Text>
        <Text style={{
          color: '#FFD700',
          fontSize: 20,
          paddingLeft: 5,
        }}
          ellipsizeMode='tail'
          numberOfLines={2}
        >{characterName}</Text>
      </View>
    </Pressable>
  )
};

export default ActorListItem;