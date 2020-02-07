import React from 'react';
import Profile from "../components/signed-in/index"
import UserNav from "../components/userNav/index"

function UserPage() {
    return (
        <div>
           <UserNav />
        <Profile /> 
        </div>
    );
}

export default UserPage;