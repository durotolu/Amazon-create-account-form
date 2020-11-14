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

  const onCreateAccount = e => {
    const {name, email, password, repassword} = loginField;
    if (!name || !email || !password || !repassword) {
      alert("Form incomplete")
      return
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters")
      return
    }
    if (password !== repassword) {
      alert("Password doesn't match")
      return
    }
    console.log({
      ...loginField,
      password: "****",
      repassword: "****"
    });
    setLoginField(initialLoginField)
  }

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
            <input className="password-input" type="password" placeholder="At least 6 characters" value={loginField.password} onChange={onValueChange} name="password" />
          <p className="password-text">Passwords must be at least 6 characters.</p>
        </label>
        <label htmlFor="repassword">Re-enter password
            <input type="password" value={loginField.repassword} onChange={onValueChange} name="repassword" />
        </label>
        <button type="button" onClick={onCreateAccount}>Create your Amazon account</button>
        <p>By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
        <p className="signin">Already have an account? <a href="#">Sign-In</a></p>
      </form>
      <footer>
        <nav>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </nav>
        <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

export default App;
