import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, Platform, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/mealAction";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderIcon";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutten: isGlutenFree,
      lactose: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} onValueChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filters",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    marginVertical: 10,
  },
  filterContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});

export default FilterScreen;
