import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Navbar } from 'reactstrap';

class UserNav extends Component {
    logOut(e) {
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">
                        Login <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">
                        Register <span className="sr-only">(current)</span>
                    </Link>
                </li>
                
            </ul>
            



        )
        const userLink = (

            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/profile" className="nav-link">
                        User <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/live-feed">Live Feed <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/post-page">Post<span className="sr-only">(current)</span></a>
                </li>
            </ul>



        )

        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <Container>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <h4 className="text-success">InvestmentPal</h4>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
                </Container>

            </nav>
            
        )

    }
}
export default withRouter(UserNav);
