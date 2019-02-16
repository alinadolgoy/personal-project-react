   import React from 'react';
   import { DisplayInfo } from '../components/DisplayInfo';
   import { Error } from '../components/ErrorMessage';
   
   //if username is empty AND repos is empty (this will the check for when to display error and when to display info )
    export const displayOptions = () => {
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