import * as types from '../constants/ActionTypes';
import jsonp from 'jsonp';
//import me from '../api/me';

const PORT = '8080';
const ROOT_URL = `http://localhost:${PORT}/api/builds/tos`;

/*
export function fetchBuilds(params = 'limit=10&page=1') {
    const url = `${ROOT_URL}${params}`;
    let request = false;

    jsonp(url, null, function(err, {builds}){
		if (err) {
			console.error(err.message);
		} else {
			request = builds;
			console.log(builds)
		}
    });

    return {
        type: types.FETCH_BUILDS,
        payload: request
    }
}
*/

export function fetchBuilds( params = 'limit=10&page=1' ) {
	return dispatch => {
		//dispatch(setLoading()); // Show a loading spinner
		jsonp(url, null, function(err, {builds}) {
	    	//dispatch(doneLoading()); // Hide loading spinner
			if (err) {
				//dispatch(someError)
				console.error(err.message);
			} else {
				dispatch(setBuilds(builds))
			}
	    })
	}
}

function setBuilds(data) {
    return {
        type: types.FETCH_BUILDS,
        payload: data
    }
}

/*
FAKE API

function receiveProfile(profile) {
  return {
    type: types.RECEIVE_USER,
    profile: profile
  }
}

export function getProfile() {
  return dispatch => {
    me.getProfile(profile => {
      dispatch(receiveProfile(profile))
    })
  }
}
*/