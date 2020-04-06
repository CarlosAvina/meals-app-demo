import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MealCard from '../components/MealCard';

const MealsList = (props) => {
  const renderMeal = (itemData) => {
    const {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    } = itemData.item;

    const navigateMealDetail = () => {
      props.navigation.navigate({
        routeName: "MealDetail",
        params: {
          mealId: id,
          mealTitle: title
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
