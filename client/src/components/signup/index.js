import React, { Component } from 'react';
import API from "../UserFunctions";
import './style.css';


class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        API.register(user).then(res => {
                this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container signup-margin" id="margin">
                <div className="row">
                    <div className="col-md-6 mt-4 mx-auto signup-pad">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    minLength="2"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    minLength="2"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    minLength="5"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    // minLength="6"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    required/>
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Sign Up
               </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;