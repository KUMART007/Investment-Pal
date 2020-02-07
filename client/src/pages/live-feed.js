import React from 'react';
import UserNav from "../components/userNav/index"
import LiveFeed from "../components/live-feed/index"

function UserPage() {
    return (
        <div>
           <UserNav />
           <LiveFeed />
        
        </div>
    );
}

export default UserPage;