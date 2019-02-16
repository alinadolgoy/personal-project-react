import React, { Component } from 'react';
import './App.css';
import DisplayInfo from './components/DisplayInfo';
import { getInfoFromApi }  from './services/fetchingData';
import Error from './components/ErrorMessage';
import { connect } from 'react-redux';
import { displayOptions } from '../services/displayOptions';
import { updateUserNameAction , githubAPIRequest } from '../reduxFiles/actions';

const mapStateToProps = (state) => {
return {
  submitClicked: state.submitClicked,
  userName: state.userName,
  payloads: {
    repos: [],
    pullRequests: []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  updateUserName: (userName) => dispatch(updateUserNameAction(userName)),
  onSubmitClicked: () => dispatch(githubAPIRequest(this.props.userName))
}
}

// change this to a stateless component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitClicked: false,
      userName: '',
      payloads: {
        repos: [],
        pullRequests: []
      }
        }
  }

  updateInputValue(evt) {
  this.props.updateUserName(evt.target.value)
  }
 
  render() {
    // to decide what to display the display options function is being called and is being provided with all the props that were mapped 
  const display = displayOptions(this.props);
  return (
        <div className="App"> 
         UserName: <input type="text" name='username' value={this.props.inputValue} onChange={this.updateInputValue}/>
         <button onClick={this.props.onSubmitClicked}>Submit</button> 
          {display}
        </div>
    );
  }
}


  
export default connect(mapStateToProps, mapDispatchToProps)(App);

