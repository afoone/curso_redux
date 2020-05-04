
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients'
import { store } from './store/store'


store.subscribe(() => document.getElementById('counter').innerText = store.getState().recipes[0].name);

store.dispatch(addRecipe("Cocido"));
store.dispatch(addIngredient("Cocido", "Chorizo", 1));
window.store = store;

console.log("Redux arrancado", store);