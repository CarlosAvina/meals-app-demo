import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>The Categories Screen</Text>
            <Button title="Next screen" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeal'});
                // props.navigation.replace('CategoryMeal'); // Replaces the view in the stack, doesn't allow to navigate back
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

export default CategoriesScreen;