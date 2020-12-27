import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActorList from './ActorList';

const ActorListSection = ({ actors }) => {
  if (!actors || (actors.length === 0)) {
    return null;
  }
  return (
    <>
      <Text style={styles.title}>Actors</Text>
      <View style={{ height: 20 }} />
      <ActorList actors={actors} />
    </>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});

export default ActorListSection;


