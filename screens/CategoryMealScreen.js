import React from "react";

import MealsList from '../components/MealsList';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return <MealsList listData={meals} navigation={props.navigation} />;
}

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: category.title
  };
};


export default CategoryMealScreen;
