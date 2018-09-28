import React, { Component } from 'react';

class LoginForm extends Component {

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

    formSubmit = e => {
        console.log(this.state)
    }


    render() {
        
        return (
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
        );
    }




}

export default LoginForm;