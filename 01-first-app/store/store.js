import { createStore } from 'redux';
import {reducer} from '../reducers/root'

const initialState = {
	recipes: [
		{
			name: 'Tortilla'
		}
	],
	ingredients: [
	]
};

console.log("reducers", reducer)

export const store = createStore(reducer, initialState);