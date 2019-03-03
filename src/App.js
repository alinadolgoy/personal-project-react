import React, {
  Component
} from 'react';
import './App.css';
// import DisplayInfo from './components/DisplayInfo';
// import { getInfoFromApi }  from './services/fetchingData';
// import Error from './components/ErrorMessage';
import { connect } from 'react-redux';
import { displayOptions } from './services/displayOptions';
import { updateUserNameAction, githubAPIRequest } from './actions';

const mapStateToProps = state => {
  return {
    submitClicked: state.handleDataFromGithub.initialState.submitClicked,
    userName: state.userName,
    error: state.error,
    payloads: {
      repos: state.handleDataFromGithub.initialState.gitHubInfo.repos,
      pullRequests: state.handleDataFromGithub.initialState.gitHubInfo.pullRequests
    }
  }
}

//ask Fatin - why is there intial state in the state


const mapDispatchToProps = dispatch => {

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
  //let display = displayOptions(this.state.props);

  const updateInputValue = (evt) => {
    props.updateUserName(evt.target.value)
  }
  // to decide what to display the display options function is being called and is being provided with all the props that were mapped 
  //  console.log("before going into display function:", this.state.props);

  return (
    < div className="App" >
      UserName: < input type="text"
        name='username'
        value={props.inputValue}
        onChange={updateInputValue} />
      <button onClick={props.onSubmitClicked} > Submit </button >
    </div>
  );

}

//{display}


export default connect(mapStateToProps, mapDispatchToProps)(App);