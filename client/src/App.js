import React, { useState } from 'react';
import logo from './logo.svg';
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
        </label>
        <label htmlFor="repassword">Re-enter password
            <input type="password" value={loginField.repassword} onChange={onValueChange} name="repassword" />
        </label>
        <button>Create your Amazon account</button>
      </form>
    </div>
  );
}

export default App;
