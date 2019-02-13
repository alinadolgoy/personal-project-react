import React, { Component } from 'react';
import './App.css';
import DisplayInfo from './components/DisplayInfo';
import { getInfoFromApi }  from './services/fetchingData';
import Error from './components/ErrorMessage';
import { connect } from 'react-redux';

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

const mapDispatchToProps = () => {
  
}


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
    this.retreiveTransformAndSaveData = this.retreiveTransformAndSaveData.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);

  }

  // this function will update the value of the user name in the state once it is entered into the input field
  updateInputValue(evt) {
    this.setState({
      userName: evt.target.value
    })
  }


  //moved to actions
  // // this actiob will fire once the user click the submit button. It will take the user name that was entered call the fetch and transformation functions. 
  // retreiveTransformAndSaveData() {
  //   this.setState({submitClicked: true});
  //   getInfoFromApi(this.state.userName)
  //   .then(transformedData => this.setState({payloads: transformedData}))
  //   .catch((error) => this.setState({errorMessage: error})) 
  // }
 

  

 
  render() {
    //if username is empty AND repos is empty (this will the check for when to display error and when to display info )
      const displayOptions = () => {
        let result;
        // if user has both forked repos and pull requests
        if (this.state.submitClicked && this.state.payloads.repos.length>0 && this.state.payloads.pullRequests.length>0) {
          result = <DisplayInfo repos={this.state.payloads.repos} pullRequests={this.state.payloads.pullRequests} />
        }
        // if user has repos but not pull requests
        else if (this.state.submitClicked && this.state.payloads.repos.length > 0 && this.state.payloads.pullRequests.length === 0 ){
          result = <DisplayInfo repos={this.state.payloads.repos} noPrError="This user has no recent pull requests" />
        }
        // if user has pull requests but not repos
        else if (this.state.submitClicked && this.state.payloads.repos.length === 0 && this.state.payloads.pullRequests.length > 0) {
          result = <DisplayInfo pullRequests={this.state.payloads.pullRequests} noRepoError="This user has no recent forked repos" /> 
        }
        //if user has no forked repos and no pull reuqests
        else if (this.state.submitClicked && this.state.payloads.repos.length === 0 && this.state.payloads.pullRequests.length === 0) {
          result = <Error error="This user has no recent forked repos and no recent pull requests" />
        }
        // if userName has not been submitted yet 
        else {
          result = <Error error="please enter user name and click submit" />
        }
        return result;
      }
      const display = displayOptions();


    return (
        <div className="App"> 
         UserName: <input type="text" name='username' value={this.state.inputValue} onChange={this.updateInputValue}/>
         <button onClick={this.retreiveTransformAndSaveData}>Submit</button> 
          {display}
        </div>
    );
  }
}


  
export default connect(mapStateToProps, mapStateToDispatch)(App);

