export const TOGGLE_FAVORITE = 'TOOGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = appliedFilters => {
    return { type: SET_FILTERS, filters: appliedFilters }
};