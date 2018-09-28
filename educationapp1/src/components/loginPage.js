import React, { Component } from 'react';
import LoginForm from './loginForm';
import SignupFrom from './signupForm';


class LoginPage extends Component {
    state = {
        
    }

    
    

    render() {
        return (
            <div>
                <h1>You have reached the Login page</h1>
                
                <div>
                    <LoginForm />
                    <SignupFrom/>
                    
                </div>
            </div>



        );

    }

}

export default LoginPage;