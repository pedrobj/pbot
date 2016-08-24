import { RECEIVE_USER } from '../constants/ActionTypes'

export default function (state = [], action) {
    switch (action.type) {
        case RECEIVE_USER:
        	return state;
        default:
        	return state;
    }
}