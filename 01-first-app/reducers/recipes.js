import { ADD_RECIPE } from "../actions/action-types";

export const recipesReducer = (state = [], action) => {

	switch (action.type) {
		case ADD_RECIPE:
			const newstate =
				Object.assign({}, state, {
					recipes: [...state.recipes, { name: action.name }]
				})
			return newstate;
		default:
			return state;
	}


}
