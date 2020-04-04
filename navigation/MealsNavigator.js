import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultNavOptionsConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A screen",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "CategoryMeal",
    defaultNavigationOptions: defaultNavOptionsConfig,
  }
);

const FavsNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptionsConfig,
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
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor, // Only if shifting is set to false
        },
      })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptionsConfig,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Main: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
    },
  }
);

export default createAppContainer(MainNavigator);
