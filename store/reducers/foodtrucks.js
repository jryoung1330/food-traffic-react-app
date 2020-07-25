import { FOODTRUCKS } from '../../data/foodtrucks';
import { TOGGLE_FAVORITE } from '../actions/foodtrucks';

const initalState = {
    foodtrucks: FOODTRUCKS,
    favorites: [],
};

const foodtrucksReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existsingIndex = state.favorites.findIndex(
                (f) => f.id === action.id
            );
            if (existsingIndex >= 0) {
                // make a copy
                const updatedFavs = [...state.favorites];

                // remove the element at that index
                updatedFavs.splice(existsingIndex, 1);

                // update state
                return { ...state, favorites: updatedFavs };
            } else {
                return {
                    ...state,
                    favorites: state.favorites.concat(
                        state.foodtrucks.find((f) => f.id === action.id)
                    ),
                };
            }
            default: return state;
    }
};

export default foodtrucksReducer;