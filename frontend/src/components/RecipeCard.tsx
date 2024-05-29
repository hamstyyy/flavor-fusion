import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Recipe} from '../interfaces';

const RecipeCard = (props: Recipe) => {
  return (
    <View style={styles.container}>
      <Text>++++{props.title}</Text>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
