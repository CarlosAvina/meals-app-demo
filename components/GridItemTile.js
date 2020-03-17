import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const GridItemTile = props => {
  return (
    <TouchableOpacity style={{...styles.gridItem, ...{ backgroundColor: props.color}}} onPress={props.onSelect}>
      <View>
        <Text numberOfLines={2} style={styles.itemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 5
  },
  itemText: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default GridItemTile;
