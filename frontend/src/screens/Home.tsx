import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

interface HomeProps {}

const Home = (_props: HomeProps) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
