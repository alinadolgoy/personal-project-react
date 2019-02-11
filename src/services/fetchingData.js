  

  import React from 'react';

  import { transformToRepos , tranformToPRs } from './Transformations';

  
 
   const getInfoFromApi = (userName) => {
    return (
     fetch(`https://api.github.com/users/${userName}/events`, {
     headers: {
       'Authorization': 'token a9005f9199c1fe08a461aed082b6009e2fc3958b'
     }
   })
    .then((res) => res.json())
    .then((repoData) => handlePayload(repoData))
    .catch((error) => error)
    
  )}

  // this function should call the transform functions, and the return one object for the state
const handlePayload =(allRepoData) => {
let relevantData = {
  repos:[],
  pullRequests: []
 } 
   relevantData.repos = transformToRepos(allRepoData);
   relevantData.pullRequests = tranformToPRs(allRepoData);
   console.log(relevantData)
return relevantData;
}



export  { getInfoFromApi };