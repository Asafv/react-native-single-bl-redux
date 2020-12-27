import React from 'react';
import {
  View, Image, StyleSheet, useWindowDimensions, ActivityIndicator, ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import HTML from "react-native-render-html";
import ActorListSection from '../components/ActorListSection';

const MovieDetails = ({ navigation, route }) => {

  const movieDetails = useSelector(({ showInfo: { info } }) => info);
  const contentWidth = useWindowDimensions().width;

  const imageUri = _.get(movieDetails, 'image.medium');
  const officialSite = _.get(movieDetails, 'officialSite');
  const summary = _.get(movieDetails, 'summary');
  const actors = _.get(movieDetails, '_embedded.cast');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      {!movieDetails && <ActivityIndicator size="large" color="#FFD700" />}
      {!!movieDetails &&
        <>
          <Image
            style={styles.image}
            source={{ uri: imageUri }}
            resizeMethod='auto'
            resizeMode='stretch'
          />
          <View style={{ padding: 20, flex: 1 }}>
            <HTML source={{ html: summary }}
              baseFontStyle={styles.summary}
              contentWidth={contentWidth}
            />
          </View>
          <ActorListSection actors={actors} />
        </>}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  summary: {
    fontSize: 18,
    color: '#FFD700',
  }
});

export default MovieDetails;