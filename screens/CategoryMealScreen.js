import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import MealsList from '../components/MealsList';
import DefautlText from '../components/DefaultText';
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const catId = props.navigation.getParam("categoryId");
  const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if (meals.length === 0) {
    return <View style={styles.content}>
      <DefautlText>No meal found :c</DefautlText>
    </View>
  }

  return <MealsList listData={meals} navigation={props.navigation} />;
}

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: category.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
