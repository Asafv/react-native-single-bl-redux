import React from 'react';
import { View, FlatList } from 'react-native';
import ActorListItem from './ActorListItem';

const ActorList = ({ actors, handleOnItemPress }) => {
  return (
      <FlatList
        data={actors}
        horizontal={true}
        renderItem={(data) => ActorListItem(data, handleOnItemPress)}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
  );
};

export default ActorList;