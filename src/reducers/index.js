import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import GlobalReducer from './reducer_global';

const rootReducer = combineReducers({
    recipes: RecipesReducer,
    global:  GlobalReducer
});

export default rootReducer;
