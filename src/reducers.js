import { handlePayload }  from './services/handlePayload'
import { REQUEST_GITHUB_DATA_PENDING, REQUEST_GITHUB_DATA_SUCCESS, REQUEST_GITHUB_DATA_FAILED, UPDATE_SUBMIT_CLICKED, UPDATE_USER_NAME } from './constants'; 

export const reducer = () => 'state';


export const handleDataFromGithub = (state , action ={}) => {
    switch(action.type) {
        case REQUEST_GITHUB_DATA_PENDING:
            return Object.assign( {}, state, { isPending: true })
        case REQUEST_GITHUB_DATA_SUCCESS:
            return Object.assign( {} , state , {payload: handlePayload(action.payload), isPending: false} ) //handlepayload
        case REQUEST_GITHUB_DATA_FAILED:
            return Object.assign( {} , state , {error: action.payload , isPending: false} )
        default:
            return state;
        }    
    }

export const textUpdates = (state, action ={}) => {
    switch(action.type) {
        case UPDATE_USER_NAME: 
            return Object.assing({}, state, {userName: action.payload})
        case UPDATE_SUBMIT_CLICKED: 
            return Object.assign({}, state, {error: action.payload})
         default:
            return state;

    }
}