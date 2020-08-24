import { ADD_PLACE, REMOVE_PLACE, TOGGLE_PLACE } from './types';

export const addPlace = (placeName) => {
	return {
		type: ADD_PLACE,
		payload: placeName
	}
}

export const removePlace = (placeId) => {
	return {
		type: REMOVE_PLACE,
		payload: placeId
	}
}

export const togglePlace = (placeId) => {
	return {
		type: TOGGLE_PLACE,
		payload: placeId
	}
}