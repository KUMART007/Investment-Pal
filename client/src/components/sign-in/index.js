import React from "react";
import Nav from "../nav/index"


function SignIn() {
    return (
    <div>
    <Nav />
    <form class="w-50 mx-auto">     
            <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <button type="submit" class="btn"><a class="nav-link" href="/profile">Sign In</a></button>
            </div>
        
</form>
</div>
);
}

export default SignIn;