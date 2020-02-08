import React from 'react';
import UserNav from "../components/userNav/index"

function PostPage() {
    return (
        <div class="background-color: #eee;">
           <UserNav />
           
        <div class="jumbotron w-75 p-3 mx-auto text-center">
        <h1 class="display-4 ">Make Posts Here!!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p></p>
        </div>
    </div>
    );
}

export default PostPage;