import React from 'react-native';
import StarRating from 'react-native-star-rating-widget';

interface RatingProps {
  rating: number;
  setRating?: (rate: number) => void;
}

const Rating = ({rating, setRating = () => {}}: RatingProps) => {
  return (
    <StarRating
      rating={rating}
      onChange={setRating}
      enableSwiping={false}
      starSize={25}
      animationConfig={{
        scale: 1,
      }}
    />
  );
};

export default Rating;
