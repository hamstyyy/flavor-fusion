import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface FavouritesProps {}

const Favourites = (props: FavouritesProps) => {
  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {},
});
