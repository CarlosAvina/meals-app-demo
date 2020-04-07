import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/mealAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingId = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingId >= 0) {
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(existingId, 1);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS: 
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.filteredMeals.filter(meal => {
        if (appliedFilters.gluten && !meal.isGlutenFree) return false;
        if (appliedFilters.lactose && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals }
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
