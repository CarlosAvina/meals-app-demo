import React from "react";
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const FavoritesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealsList listData={meals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = () => {
    return { 
        headerTitle: 'Your favorites'
    }
}

export default FavoritesScreen;
