import React from "react";

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <a class="navbar-brand text-white" href="/">App Name</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/sign-in">Sign In <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/sign-up">Sign Up <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            

        </nav>
    );
}

export default Nav;


