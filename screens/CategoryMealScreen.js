import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>The Category Meal Screen</Text>
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