import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import GridItemTile from '../components/GridItemTile';
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    const { id, title, color } = itemData.item;

    return <GridItemTile color={color} title={title} onSelect={() => {
        props.navigation.navigate({
          routeName: "CategoryMeal",
          params: {
            categoryId: id
          }
        });
    }} />
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
