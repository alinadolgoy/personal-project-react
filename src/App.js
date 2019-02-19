import React, { Component } from 'react';
import './App.css';
// import DisplayInfo from './components/DisplayInfo';
// import { getInfoFromApi }  from './services/fetchingData';
// import Error from './components/ErrorMessage';
import { connect } from 'react-redux';
import { displayOptions } from './services/displayOptions';
import { updateUserNameAction , githubAPIRequest } from './actions';

const mapStateToProps = (state) => {
return {
  submitClicked: state.submitClicked,
  userName: state.userName,
  error: state.error,
  payloads: {
    repos: [],
    pullRequests: []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  updateUserName: (userName) => dispatch(updateUserNameAction(userName)),
  onSubmitClicked: (userName) => dispatch(githubAPIRequest(userName))
}
}




const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     submitClicked: false,
  //     userName: '',
  //     payloads: {
  //       repos: [],
  //       pullRequests: []
  //     }
  //       }
  // }

  const updateInputValue = (evt) => {
    props.updateUserName(evt.target.value)
    }
// to decide what to display the display options function is being called and is being provided with all the props that were mapped 
  const display = displayOptions(props);
  console.log(props)
  return (
        <div className="App"> 
         UserName: <input type="text" name='username' value={props.inputValue} onChange={updateInputValue}/>
         <button onClick={props.onSubmitClicked}>Submit</button> 
          {display}
        </div>
    );
  
}


  
export default connect(mapStateToProps, mapDispatchToProps)(App);

