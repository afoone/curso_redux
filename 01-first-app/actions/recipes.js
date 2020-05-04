import { ADD_RECIPE } from "./action-types"

export const addRecipe = (name) => {
    return {
        type: ADD_RECIPE,
        name
    }
}