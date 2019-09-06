import { FETCH_USER } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            // console.log('reducer_user: ', action.payload);
            return action.payload;
        default:
            return state
    }
}
