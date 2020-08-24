import placeReducer from './reducers/placeReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
	places: placeReducer
})

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;