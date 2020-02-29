import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
                        Profile <span className="sr-only">(current)</span>
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
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Nav.Link href="/"><h4 className="text-success">InvestmentPal</h4></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {localStorage.usertoken ? userLink : loginRegLink}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default withRouter(UserNav);
