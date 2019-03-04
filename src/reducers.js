import handlePayload from './services/handlePayload'
import {
    REQUEST_GITHUB_DATA_PENDING,
    REQUEST_GITHUB_DATA_SUCCESS,
    REQUEST_GITHUB_DATA_FAILED,
    UPDATE_USER_NAME
} from './constants';

const initialState = {
    submitClicked: false,
    userName: '',
    error: '',
    gitHubInfo: {
        repos: [],
        pullRequests: []
    }
}

export const mainReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_GITHUB_DATA_PENDING:
            return { ...state, submitClicked: true }
        case REQUEST_GITHUB_DATA_SUCCESS:
            //my reason for adding the submit clicked in the other two cases is in case it never goes into pending
            return {
                ...state,
                gitHubInfo: handlePayload(action.payload),
                submitClicked: true
            }
        case REQUEST_GITHUB_DATA_FAILED:
            return {
                ...state,
                error: action.payload,
                submitClicked: true
            }
        case UPDATE_USER_NAME:
            return { ...state, userName: action.payload }
        default:
            return state;
    }
}



