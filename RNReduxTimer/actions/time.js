import { TOGGLE_TIMER, UPDATE_TIMER, CLEAR_TIMER, LAP_TIMER } from './types';

let t;

export const toggleTimer = (dispatch) => {
  clearInterval(t);
  t = setInterval(() => {
      dispatch(updateTimer())
    }, 1000);
	return {
		type: TOGGLE_TIMER,
	}
}

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  }
}

export const clearTimer = () => {
  clearInterval(t);
  return {
    type: CLEAR_TIMER
  }
}

export const lapTimer = () => {
  return {
    type: LAP_TIMER
  }
}