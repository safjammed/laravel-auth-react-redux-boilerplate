import axios from 'axios';
export const FETCH_USER = 'fetch_user';

const ROOT_URL = '/api';

export function fetchUser() {
    const request = axios.get(`${ROOT_URL}/currentUser`);
    console.log("action", request);
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: FETCH_USER,
                payload: data
            });
        });
    }
}
