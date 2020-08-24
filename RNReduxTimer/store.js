import timerReducer from './reducers/timerReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
	timer: timerReducer
})

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;