import * as actions from './actionTypes';
const data = require('../data/users');

export function fetchUsers(dispatch) {
        dispatch({
            type: actions.FETCH_USERS,
            data: data.users
        });
}
