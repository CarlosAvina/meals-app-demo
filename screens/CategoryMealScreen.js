import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";

import MealCard from '../components/MealCard';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  console.log(catId);
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMeal = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } = itemData.item;
    console.log(imageUrl);

    return <MealCard title={title} image={imageUrl} duration={duration} complexity={complexity} affordability={affordability} />
  }

  return (
    <View style={styles.screen}>
      <FlatList data={meals} keyExtractor={(item, index) => item.id} renderItem={renderMeal} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: category.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  }
});

export default CategoryMealScreen;
