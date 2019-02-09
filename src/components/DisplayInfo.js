import React from 'react';

const  DisplayInfo = ({repos, pullRequests}) => {
    console.log("repos that display info receives", repos)
    return (
<div>
   
        
</div>
);
}

export default DisplayInfo

// <ul>
//         {pullRequests.map(pullRequest => 
//             <li>
//             <a href={`${pullRequest.PrLink}`}>{pullRequest.PrTitle}</a>    
//             {pullRequest.status}
//             </li>)}
//         </ul>

// <h2>Forked Repositories</h2>
// <ul>
// {repos.map(repo => 
//     <li>
//    <a href={`https://github.com/${repo.repoLink}`}> {repo.repoName} </a> <br />
//      <a href={`https://github.com/${repo.baseRepo}`}>Base repo</a>
//     </li>)}
// </ul>
// <h2>Pull Requests</h2>