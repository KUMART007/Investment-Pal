import React from "react";

function UserNav() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <a class="navbar-brand text-white" href="/profile">App Name</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/">Log Out <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/profile">Profile <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/live-feed">Live Feed <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="/post-page">Post Page <span class="sr-only">(current)</span></a>
                </li>
            </ul>

        </nav>
    );
}

export default UserNav;