import { SET_PAGE } from '../actions/types';
const initialState = 'login';

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_PAGE:
			return payload;
		///case REMOVE_ALERT:
		//	return state.filter((alert) => alert.id !== payload);
		default:
			return state;
	}
}
