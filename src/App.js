import React, { Component } from 'react';
import './App.css';
import DisplayInfo from './components/DisplayInfo';
import { getInfoFromApi }  from './services/fetchingData';
import Error from './components/ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitClicked: false,
      userName: '',
      payloads: [], 
      errorMessage: ''
    }
    this.retreiveTransformAndSaveData = this.retreiveTransformAndSaveData.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);

  }

  // this function will update the value of the user name in the state once it is entered into the input field
  updateInputValue(evt) {
    this.setState({
      userName: evt.target.value
    })
// to test if state has changed put console.log here and add a character
console.log("state after update", this.state.payloads)
  }

  // this actiob will fire once the user click the submit button. It will take the user name that was entered call the fetch and transformation functions. 
  retreiveTransformAndSaveData() {
    this.setState({submitClicked: true});
    debugger;
    getInfoFromApi()
    //this.setState({payloads: transformedData})
    .then(transformedData => console.log('success', transformedData))
    .catch((error) => this.setState({errorMessage: error})) 
  }
 

  

 
  render() {
    //if username is empty AND repos is empty (this will the check for when to display error and when to display info )
      const displayOptions = () => {
        let result;
        if (this.state.submitClicked && this.state.payloads.length>0 ) {
          result = <DisplayInfo repos={this.state.payloads} />
        }
        else if (this.state.submitClicked && this.state.payloads === 0){
        // add the prs vs repos here
          result = <Error error="This user has no data" />
        }
        else {
          result =  <Error error="please enter user name and click submit" />
        }
        return result;
      }
      const display = displayOptions();

    // if (this.state.shouldDisplayInfo) {
    //   willDisplayInfo = <DisplayInfo repos={this.state.payloads.repos} pullRequests={this.state.payloads.pullRequests}/>
    // }
    // else {
    //   willDisplayInfo = <div>Please login</div>
    // }

    return (
        <div className="App"> 
         UserName: <input type="text" name='username' value={this.state.inputValue} onChange={this.updateInputValue}/>
         <button onClick={this.retreiveTransformAndSaveData}>Submit</button> 
          {display}
        </div>
    );
  }
}


  
export default App;
