import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {useRecipesStore} from '../store';
import {RecipeCard} from '../components';

interface HomeProps {}

const Home = (_props: HomeProps) => {
  const {list, recipes} = useRecipesStore();

  useEffect(() => {
    const getlist = async () => await list();
    getlist();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList
        data={recipes}
        renderItem={({item}) => <RecipeCard {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 40,
  },
});
