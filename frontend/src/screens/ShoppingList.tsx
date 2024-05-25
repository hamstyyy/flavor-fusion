import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ShoppingListProps {}

const ShoppingList = (props: ShoppingListProps) => {
  return (
    <View style={styles.container}>
      <Text>ShoppingList</Text>
    </View>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  container: {},
});
