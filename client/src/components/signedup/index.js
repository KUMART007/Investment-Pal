import React from "react";
import Nav from "../nav/index";
import { Switch } from "react-router";

function Signup() {
    return (
    <div>
    <card>
    <form>     
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        
</form>
</card>
</div>
);
}

export default Signup;