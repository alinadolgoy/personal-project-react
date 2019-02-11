import React from 'react';
import Error from './ErrorMessage.js'

const  DisplayInfo = ({ repos = [], pullRequests = [] , noPrError='', noRepoError=''}) => {

    return (
    <div>
        <h2>Forked Repositories</h2>
        <Error error={noRepoError} />
        <ul>
                {repos.map((repo,i) => 
                    <li key={i}>
                        <a href={`https://github.com/${repo.repoLink}`}> {repo.repoName} </a> <br />
                        <a href={`https://github.com/${repo.baseRepo}`}>Base repo</a>
                    </li>)}
            </ul>
        <h2>Pull Requests</h2>    
        <Error error={noPrError} />
            <ul>
                {pullRequests.map((pullRequest,i) => 
                    <li key={i}>
                        <a href={`${pullRequest.PrLink}`}>{pullRequest.PrTitle}</a>    
                        {pullRequest.status}
                        {pullRequest.merged}
                    </li>)}
            </ul>   
    </div>
);
}

export default DisplayInfo

