import { createStore } from 'redux';


// Función para crear un objeto para redux

const addIngredient = (recipe, name, quantity) => {
	return {
		type: "ADD-INGREDIENT",
		recipe, name, quantity
	}
}


const reducer = (state, action) => {

	switch (action.type) {
		case "ADD-RECIPE":
			const newstate =
				Object.assign({}, state, {
					recipes: [...state.recipes, { name: action.name }]
				})
			return newstate;
		case "ADD-INGREDIENT":
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

const initialState = {
	recipes: [
		{
			name: 'Omelette'
		}
	],
	ingredients: [
		{
			recipe: 'Omelette',
			name: 'Egg',
			quantity: 2
		}
	]
};

const store = createStore(reducer, initialState);

store.subscribe(() => document.getElementById('counter').innerText = store.getState().recipes[0].name);

//setInterval(() => store.dispatch({ type: 'INC' }), 500);

window.store = store;
window.addIngredient = addIngredient

console.log("Redux started");