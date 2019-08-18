import { createStore } from 'redux';

const initalState = {
    recipes: [],
    ingredients: []
}

const reducer = (state, action) => state;

const store = createStore(reducer, initalState);

export default store;