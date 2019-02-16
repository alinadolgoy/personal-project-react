import handlePayload   from './services/handlePayload'
import { REQUEST_GITHUB_DATA_PENDING, REQUEST_GITHUB_DATA_SUCCESS, REQUEST_GITHUB_DATA_FAILED, UPDATE_SUBMIT_CLICKED, UPDATE_USER_NAME } from './constants'; 



export const handleDataFromGithub = (state , action ={}) => {
    switch(action.type) {
        case REQUEST_GITHUB_DATA_PENDING:
            return Object.assign( {}, state, { submitClicked: true })
        case REQUEST_GITHUB_DATA_SUCCESS:
        //my reason for adding the submit clicked in the other two cases is in case it never goes into pending
            return Object.assign( {} , state , {payload: handlePayload(action.payload), submitClicked: true} ) //handlepayload
        case REQUEST_GITHUB_DATA_FAILED:
            return Object.assign( {} , state , {error: action.payload , submitClicked: true} )
        default:
            return state;
        }    
    }

export const textUpdates = (state, action ={}) => {
    switch(action.type) {
        case UPDATE_USER_NAME: 
            return Object.assing({}, state, {userName: action.payload})
         default:
            return state;
    }
}