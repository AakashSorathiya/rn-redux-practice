import { ADD_PLACE, REMOVE_PLACE, TOGGLE_PLACE } from '../actions/types';

initialState = {
	placeName: '',
	places: []
}
let placeId = 0;
const placeReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PLACE: 
			return {
				...state,
				places: state.places.concat({
					id: placeId++,
					value: action.payload,
					isCompleted: false
				})
			};
		case REMOVE_PLACE:
			const finalArray = [];
			var oldArray = state.places;
			oldArray.forEach((item) => {
				if (item.id !== action.payload) {
					//add to new array
					finalArray.push(item);
				}
			})
			return {
				...state,
				places: finalArray
			};
		case TOGGLE_PLACE:
			const finalArrayForToggle = [];
			var oldArrayForToggle = state.places;
			oldArrayForToggle.forEach((item) => {
				if (item.id === action.payload) {
					item.isCompleted = !item.isCompleted;
					finalArrayForToggle.push(item);
				} else {
					finalArrayForToggle.push(item);
				}
			})
			return {
				...state,
				places: finalArrayForToggle
			};			
		default: 
			return state;
	}
}

export default placeReducer;