import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Recipe} from '../interfaces';
import {Card, Text} from 'react-native-paper';
import {Rating} from '../components';
import {convertMinutes, calculateRecipeRating} from '../helpers';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Dash from 'react-native-dash-2';

const DUMMY_IMAGE_URL =
  'https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg';

const RecipeCard = (props: Recipe) => {
  const [rating, setRating] = useState<number>(0);
  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    calculateRating();
    const time = convertMinutes(props.duration);
    setDuration(time);
  }, []);

  const calculateRating = () => {
    const ratingNum = calculateRecipeRating(props);
    setRating(ratingNum);
  };

  return (
    <Card mode="elevated" style={styles.container}>
      <Card.Title
        title={props.title}
        subtitle={
          <>
            <View style={styles.title}>
              <Rating rating={rating} setRating={() => null} />
              {props.ratings && <Text>({props?.ratings.length})</Text>}
            </View>
            <Dash dashColor="red" />
          </>
        }
      />

      <Card.Content style={styles.cardContent}>
        <Card.Cover source={{uri: DUMMY_IMAGE_URL}} style={styles.cardImage} />
        <View style={styles.cardDescr}>
          <View style={styles.mealDescr}>
            <Text>
              <MaterialCommunityIcon name="clock-time-eight-outline" />
              {!!duration.hours && <Text> {duration.hours} h</Text>}
              {!!duration.minutes && <Text> {duration.minutes} min</Text>}
            </Text>

            <Text>
              <MaterialIcon name="restaurant" />
              <Text> {props.servings} servings</Text>
            </Text>
          </View>

          <Dash dashColor="black" dashGap={10} dashThickness={1} />

          <View style={styles.authorDescr}>
            {props.author && (
              <>
                <Image
                  source={{
                    uri: props.author?.avatar,
                  }}
                  style={styles.avatar}
                />
                <Text>
                  by {props.author.firstName} {props.author.lastName}
                </Text>
              </>
            )}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 0,
  },
  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  cardDescr: {
    fontSize: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 20,
    flex: 1,
  },
  mealDescr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    aspectRatio: 2 / 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  authorDescr: {
    padding: 15,
    gap: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
