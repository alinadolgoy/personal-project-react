import React from 'react';

const  DisplayInfo = ({repos = [], pullRequests = []}) => {
    
    return (
    <div>
        <h2>Forked Repositories</h2>
            <ul>
                {repos.map(repo => 
                    <li>
                        <a href={`https://github.com/${repo.repoLink}`}> {repo.repoName} </a> <br />
                        <a href={`https://github.com/${repo.baseRepo}`}>Base repo</a>
                    </li>)}
            </ul>
        <h2>Pull Requests</h2>    
            <ul>
                {pullRequests.map(pullRequest => 
                    <li>
                        <a href={`${pullRequest.PrLink}`}>{pullRequest.PrTitle}</a>    
                        {pullRequest.status}
                        {pullRequest.merged}
                    </li>)}
            </ul>   
    </div>
);
}

export default DisplayInfo

