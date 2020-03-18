import { SET_PAGE } from './types';
export const setPage = (page) => (dispatch) => {
	// APP should first try and get JWT from local cache

	dispatch({
		type: SET_PAGE,
		payload: {
			page: page
		}
	});
};
