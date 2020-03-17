import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderIcon from '../components/HeaderIcon';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen} >
            <Text>{meal.title}</Text>
            <Button title="Go home" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: meal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
            <Item iconName={"ios-star"} title="fav" onPress={() => console.log("Icon pressed")} />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;