import React from "react";
import Nav from "../nav/index"

function Signup() {
    return (
    <div>
    <Nav />
    <form class="w-50 mx-auto">     
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <button type="submit" class="btn"><a class="nav-link btn btn-outline-dark" href="/profile">Sign Up</a></button>
            </div>
        
</form>
</div>
);
}

export default Signup;