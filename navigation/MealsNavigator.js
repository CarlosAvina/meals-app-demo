import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createSwitchNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);