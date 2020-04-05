import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import DefaultText from '../components/DefaultText';

const MealCard = props => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={props.onSelected}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.details }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  row: {
    flexDirection: "row"
  },
  header: {
    height: "85%"
  },
  details: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: '15%'
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white"
  }
});

export default MealCard;
