import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const MovieListItem = ({ item }, onPress) => {

  const handleOnPress = (item) => {
    onPress(item);
  }

  const { image, id, name, score } = item;
  return (
    <Pressable onPress={() => handleOnPress(item)}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name} ellipsizeMode='tail' numberOfLines={1}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='star' color='#FFD700' type='font-awesome' />
            <Text style={styles.rating}>{Math.round(score * 10) / 10}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
  image: { width: 50, height: 50, borderRadius: 25 },
  textContainer: { paddingLeft: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: 'yellow', fontSize: 24, flex: 1 },
  rating: { color: '#FFD700', fontSize: 20, paddingLeft: 5 }
});

export default MovieListItem;