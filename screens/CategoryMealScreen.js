import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const category = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen} >
            <Text>The Category Meal Screen</Text>
            <Text>{category.title}</Text>
            <Button title="Next Screen" onPress={() => {
                props.navigation.navigate({routeName: "MealDetail"});
            }}/> 
            <Button title="Go back" onPress={() => {
                props.navigation.goBack();
                // props.navigation.pop(); // Only works on stack navigators
            }}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;