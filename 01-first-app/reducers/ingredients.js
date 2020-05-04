import { ADD_INGREDIENT } from "../actions/action-types";

export const ingredientsReducer = (state, action) => {

	switch (action.type) {
		case ADD_INGREDIENT:
			return Object.assign({}, state, {
				ingredients: [...state.ingredients, {
					name: action.name,
					recipe: action.recipe,
					quantity: action.quantity
				}]
			}
			)
		default:
			return state;
	}


}
