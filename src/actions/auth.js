import { SET_AUTH } from './types';
export const setAuth = (JWT, email) => (dispatch) => {
	// APP should first try and get JWT from local cache

	dispatch({
		type: SET_AUTH,
		payload: {
			email: email,
			JWT: JWT
		}
	});
};
