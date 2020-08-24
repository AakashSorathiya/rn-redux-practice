import moment from "moment";
import diff from "moment";
import { TOGGLE_TIMER, UPDATE_TIMER, CLEAR_TIMER, LAP_TIMER } from '../actions/types';

var time = 0;
var newState = {};
var lap = [];

const timerReducer = (state = {}, action) => {
	switch(action.type) {
		case TOGGLE_TIMER:
			newState = {...state};
			newState.isStarted = !newState.isStarted;
			if(newState.timerStartedAt == null) {
				newState.timerStartedAt = moment();
			}	
			return newState;
		case UPDATE_TIMER:
			newState = {...state};
			if(newState.isStarted) {
				time++;
				newState.timer = time;
				//console.log(newState.timer);
			}
			return newState;
		case CLEAR_TIMER:
			newState = {...state};
			time = 0;
			newState.timer = time;
			//console.log(newState.timer);
			return newState;
		case LAP_TIMER:
			newState = {...state};
			lap.push(newState.timer);
			newState.lap = lap;
			//console.log(newState.lap);
			return newState;
		default: 
			return state;
	}
}

export default timerReducer;