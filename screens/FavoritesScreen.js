import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderIcon";
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return <View style={styles.content}><DefaultText>No favorite meals found. Start adding some!</DefaultText></View>
  }

  return <MealsList listData={favMeals} navigation={props.navigation} />;
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
