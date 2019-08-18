// Actions
const ADD_RECIPE = 'RECIPE/ADD';
const FETCH_RECIPES = 'RECIPE/FETCH';
const MARK_FAVORITE = 'RECIPE/MARK_FAVORITE';

const initialState = [];

// interface FSA { 
//     type: string,
//     error: string,
//     payload: any,
//     meta: any
// };

// Reducer
export default function reducer(recipes = initialState, action = {}) {
    switch (action.type) {
        case ADD_RECIPE:
            return recipes.concat(action.payload);
        default:
            return recipes;
    }
}


// Action Creators
export function addRecipe() {
    return {
        type: ADD_RECIPE
    }
}

export function markFavorite(recipeId) {
    return {
        type: MARK_FAVORITE,
        payload: {
            recipeId
        }
    }
}