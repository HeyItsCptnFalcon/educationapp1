import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions'


class LoginPage extends Component {
    state = {
        username: '',
        password: '',

    }

    onUserNameChange = e => {
        this.setState({
            username: e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    formSubmit = data => {
        this.props.loginUser(this.state)
        console.log(this.state.username)
    }

    render (){
        return (
            <div>
                <h1>User Login</h1>
                <form onSubmit={this.formSubmit}>
                <div className="form-group custom-form">
                    <label>Username</label>
                    <input value={this.state.username} onChange={this.onUserNameChange} type="text" className="form-control" placeholder="Enter Your Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Enter Your Password" />
                </div>
                
                <button type="submit" className="btn btn-light float-right mt-5 custom-button">Login!</button>
            </form>
        



            </div>
        )

    }


}

export default LoginPage;