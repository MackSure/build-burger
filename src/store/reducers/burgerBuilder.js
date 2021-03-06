import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 0.6,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    error: false
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    const updatedObj = updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false
    });
    return updatedObj;
};

const fetchIngredients = (state, action) => {
    return updateObject(state, {error: true});
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state, action);
        default: return state;
    }
};

export default burgerBuilder;