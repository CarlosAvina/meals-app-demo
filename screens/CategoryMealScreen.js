import React from "react";
import { useSelector } from "react-redux";

import MealsList from '../components/MealsList';
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const catId = props.navigation.getParam("categoryId");
  const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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
