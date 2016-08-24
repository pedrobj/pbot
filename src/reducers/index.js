import {combineReducers} from 'redux';
import UserReducer from './user';
import BuildsReducer from './builds';

const allReducers = combineReducers({
    user: UserReducer,
    builds: BuildsReducer
});

export default allReducers;