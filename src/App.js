import React, { useState } from "react";
import logo from './images/NuberLogo.png';
import './App.css'
//import Amplify from 'aws-amplify';
//import config from './aws-exports';
//Amplify.configure(config);

//Amazon bad.

const App = () => {

  const [state, setState] = useState(false);
  const handleSignIn = event => {
    event.preventDefault();
  }

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Nuber!</h1>
        </header>
        <body className="App-body">
          <p>The future in ride sharing!</p>
          <p>New here? Create an account!</p>
          <button className="App-button">Create Account</button>
          <p>Been here before? Be sure to sign in.</p>
          <button className="App-button">Sign In</button>
        </body>
      </div>
    );
};

export default App;