import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from 'react-redux';

import MealCard from '../components/MealCard';

const MealsList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMeal = (itemData) => {
    const {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    } = itemData.item;

    const isFavorite = favoriteMeals.some(meal => meal.id = id);

    const navigateMealDetail = () => {
      props.navigation.navigate({
        routeName: "MealDetail",
        params: {
          mealId: id,
          mealTitle: title,
          isFav: isFavorite
        },
      });
    };

    return (
      <MealCard
        title={title}
        image={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onSelected={navigateMealDetail}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeal}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingHorizontal: 20,
  },
});

export default MealsList;
