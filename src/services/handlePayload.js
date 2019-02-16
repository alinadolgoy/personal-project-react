import { transformToRepos , tranformToPRs } from './Transformations';


// only when i started working on the redux part i realized this function should be in it's own file and not bundled up with the fetching data. 

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

    export default handlePayload