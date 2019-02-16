import  { REQUEST_GITHUB_DATA_PENDING , REQUEST_GITHUB_DATA_SUCCESS , REQUEST_GITHUB_DATA_FAILED , UPDATE_USER_NAME , UPDATE_ERROR} from './constants';

export const githubAPIRequest = () => (dispatch) => { //user name goes in first argument?
    dispatch({type: REQUEST_GITHUB_DATA_PENDING}); // DO I NEED THIS? if so, the reducer should just change the submit clicked. or should this be a "pending message"?
    fetch(`https://api.github.com/users/alinadolgoy/events`, {  //hook up user name later `https://api.github.com/users/${userName}/events`
        headers: {
          'Authorization': 'token a9005f9199c1fe08a461aed082b6009e2fc3958b'
        }
      })
      .then(res => res.json())
      .then(data => dispatch({ type: REQUEST_GITHUB_DATA_SUCCESS, payload: data }))
          //(repoData) => handlePayload(repoData))
      .catch(error => dispatch({type: REQUEST_GITHUB_DATA_FAILED, payload: error}))
      
      //((error) => error)
    
}
export const updateUserNameAction = (userName) => ({type: UPDATE_USER_NAME, payload: userName})


//keeping in case i need it in the future. apologies if i forget to erase this

//  // this actiob will fire once the user click the submit button. It will take the user name that was entered call the fetch and transformation functions. 
//  retreiveTransformAndSaveData() {
//     this.setState({submitClicked: true});
//     getInfoFromApi(this.state.userName)
//     .then(transformedData => this.setState({payloads: transformedData}))
//     .catch((error) => this.setState({errorMessage: error})) 
//   }


