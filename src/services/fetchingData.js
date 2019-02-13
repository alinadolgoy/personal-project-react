  
import handlePayload from './handlePayload.js'
 
   export const getInfoFromApi = (userName) => {
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





  