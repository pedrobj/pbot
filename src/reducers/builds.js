import {FETCH_BUILDS} from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BUILDS:
            if(action.error)
                return state;
            return [action.payload.data, ...state];
        default:
        	return state;
    }
}