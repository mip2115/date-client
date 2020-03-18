import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import page from './page';

export default combineReducers({
	alerts: alert,
	auth: auth,
	page: page
});
