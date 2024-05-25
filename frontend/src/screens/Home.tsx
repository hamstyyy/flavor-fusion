import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

interface HomeProps {}

const Home = (_props: HomeProps) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>HomeScreen</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        cumque.
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
