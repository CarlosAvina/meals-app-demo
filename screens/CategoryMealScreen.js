import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  console.log(catId);
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMeal = (itemData) => {
    return <View><Text>{itemData.item.title}</Text></View>;
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
    alignItems: "center"
  }
});

export default CategoryMealScreen;
