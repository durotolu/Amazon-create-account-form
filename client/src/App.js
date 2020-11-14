import React, { useState } from 'react';
import logo from './images/logo.jpg';
import './App.css';

const initialLoginField = {
  name: "",
  email: "",
  password: "",
  repassword: "",
}

function App() {
  const [loginField, setLoginField] = useState(initialLoginField);

  const onValueChange = e => {
    setLoginField({
      ...loginField,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <form>
        <h1>Create account</h1>
        <label htmlFor="name">Your name
            <input type="text" value={loginField.name} onChange={onValueChange} name="name" />
        </label>
        <label htmlFor="email">Email
            <input type="text" value={loginField.email} onChange={onValueChange} name="email" />
        </label>
        <label htmlFor="password">Password
            <input type="password" value={loginField.password} onChange={onValueChange} name="password" />
        <p className="password-text">Passwords must be at least 6 characters.</p>
        </label>
        <label htmlFor="repassword">Re-enter password
            <input type="password" value={loginField.repassword} onChange={onValueChange} name="repassword" />
        </label>
        <button>Create your Amazon account</button>
        <p>By creating an account, you agree to Amazon's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
        <p>Already have an account? Sign-In</p>
      </form>
    </div>
  );
}

export default App;
