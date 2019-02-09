  // these functions will filter the data received from the fetch and only return what is required for this app
  export const transformToRepos = (allRepoData) => {
    const getInfoOnRepos = allRepoData.filter(event => event.type === "ForkEvent").map(ForkedEvent => {
       return ( {
          "repoName" : ForkedEvent.payload.forkee.name,
          "repoLink" : ForkedEvent.payload.forkee.full_name, //note to self: should be added to github.com{repolink} 
          "baseRepo" : ForkedEvent.repo.name //this can be used as the name and to get the link github.com/{baseRepo} 
                 }
               )
             }
           )
           return getInfoOnRepos;
     }
 
    export const tranformToPRs = (allPrData) => {
       const getInfoOnPrs = allPrData.filter(event => event.type === "PullRequestEvent").map(pullRequestEvent => {
        //this is a check to see if PR is open/ closed and merged/ closed and not merged
        let status = pullRequestEvent.payload.pull_request.state;
        if (status === "closed" && pullRequestEvent.payload.pull_request.merged) {
          status = "Merged";
        }
        
        
        
           return ( {
               "PrTitle" : pullRequestEvent.payload.pull_request.title,
               "id" : pullRequestEvent.id, //this is for testing purposes
               "PrLink": pullRequestEvent.payload.pull_request.html_url,
               "status": status
             }
           )
         }
       )
       return getInfoOnPrs;
     }
 

      