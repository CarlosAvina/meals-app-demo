import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "CategoryMeal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const tabsConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={22} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor // Only if shifting is set to false
        }
      })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
        },
      });

export default createAppContainer(BottomTabNavigator);
