import React, {useEffect} from 'react';
import {Text, View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {useRecipesStore} from '../store';
import {RecipeCard} from '../components';

interface HomeProps {}

const Home = (_props: HomeProps) => {
  const {list, recipes} = useRecipesStore();

  useEffect(() => {
    const getlist = async () => await list();
    getlist();
    console.log(recipes, 'RECUPES IN THE COMPONENT');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>Recipes</Text>

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
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
});
