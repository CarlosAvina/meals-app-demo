import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderIcon";

const FavoritesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealsList listData={meals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="drawer"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
