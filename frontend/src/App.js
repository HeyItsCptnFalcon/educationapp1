import React, { Component } from 'react';
import LoginPage from './components/loginpage';
import SignupPage from './components/signupname';



class App extends Component {

  state ={

  }

  render(){
    return(

      <div>
        <h1>Education Page</h1>
        <LoginPage/>
        <SignupPage/>

      </div>
    );


  }

}

export default App;