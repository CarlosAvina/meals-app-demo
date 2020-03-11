import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{category.title}</Text>
      <Button
        title="Next Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop(); // Only works on stack navigators
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: category.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
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
