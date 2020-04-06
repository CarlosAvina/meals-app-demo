import React from "react";
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderIcon from "../components/HeaderIcon";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const meal = availableMeals.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: meal.imageUrl }}
        resizeMode="cover"
      />
      <View style={{ ...styles.row, ...styles.details }}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {

  const mealTitle = navigationData.navigation.getParam('mealTitle');
  
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          iconName={"ios-star"}
          title="fav"
          onPress={() => console.log("Icon pressed")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  row: {
    flexDirection: "row",
  },
  details: {
    marginHorizontal: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  title: {
    marginHorizontal: 20,
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 3,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default MealDetailScreen;
