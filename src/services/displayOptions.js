   import React from 'react';
   import  DisplayInfo  from '../components/DisplayInfo';
   import  ErrorMessage  from '../components/ErrorMessage';
   
   //if username is empty AND repos is empty (this will the check for when to display error and when to display info )
    export const displayOptions = (props) => {
      console.log('went into display options')
        let result;
        //if there was an error during the data fetch
        if (props.submitClicked && props.error.length>0) {
          result = <ErrorMessage error="There was an issue getting the required data, please try again later" />
        }
        // if user has both forked repos and pull requests
        if (props.submitClicked && props.payloads.repos.length>0 && props.payloads.pullRequests.length>0) {
          result = <DisplayInfo repos={props.payloads.repos} pullRequests={props.payloads.pullRequests} />
        }
        // if user has repos but not pull requests
        else if (props.submitClicked && props.payloads.repos.length > 0 && props.payloads.pullRequests.length === 0 ){
          result = <DisplayInfo repos={props.payloads.repos} noPrError="This user has no recent pull requests" />
        }
        // if user has pull requests but not repos
        else if (props.submitClicked && props.payloads.repos.length === 0 && props.payloads.pullRequests.length > 0) {
          result = <DisplayInfo pullRequests={props.payloads.pullRequests} noRepoError="This user has no recent forked repos" /> 
        }
        //if user has no forked repos and no pull reuqests
        else if (props.submitClicked && props.payloads.repos.length === 0 && props.payloads.pullRequests.length === 0) {
          result = <ErrorMessage error="This user has no recent forked repos and no recent pull requests" />
        }
        
        // if userName has not been submitted yet 
        else {
          result = <ErrorMessage error="please enter user name and click submit" />
        }
        console.log('result:', result, 'submitClicked:', props.submitClicked)
        return result;
      }