import React from 'react';
import RetrieveHeadlines from './HeadlineCard';


function LiveFeed() {
    return (
        <div className="background-color: #eee;">
        <div className="jumbotron w-75 p-3 mx-auto">
        <h1 className="display-4 text-center">Live Feed!</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <p></p>
        
        </div>
        <RetrieveHeadlines/>
    </div>
    );
}

export default LiveFeed;