import { ADD_INGREDIENT } from "./action-types"

export const addIngredient = (recipe, name, quantity) => {
	return {
		type: ADD_INGREDIENT,
		recipe, name, quantity
	}
}