  

  import React from 'react';

  //import { transformToRepos , tranformToPRs } from './Transformations';

  
 
   const getInfoFromApi = () => {
   return (
     fetch("https://api.github.com/users/alinadolgoy/events", {
     headers: {
       'Authorization': 'token a9005f9199c1fe08a461aed082b6009e2fc3958b'
     }
   })
    .then((res) => res.json())
    .then((repoData) => handlePayload(repoData))
    .then(()=> {throw new Error("error")})
    .catch((error) => "API call unsuccesfull ")
    
  )}

  // this function should call the transform functions, and the return one object for the state
const handlePayload =(allRepoData) => {
let relevantData = {
  repos:[]
 } 
   relevantData.repos = transformToRepos(allRepoData);
   // relevantData.pullRequests = tranformToPRs(allRepoData);
    console.log('relevant Data', relevantData)
return relevantData;
}
//catch on the fetch

  

export const transformToRepos = (allRepoData) => {
  const getInfoOnRepos = allRepoData.filter(event => event.type === "ForkEvent").map(ForkedEvent => {
     return ( {
        "repoName" : ForkedEvent.payload.forkee.name,
        "repoLink" : ForkedEvent.payload.forkee.full_name, //should be added to github.com{repolink} 
        "baseRepo" : ForkedEvent.repo.name //this can be used as the name and to get the link github.com/{baseRepo} aprox
               }
             )
           }
         )
         return getInfoOnRepos;
   }


export  { getInfoFromApi };