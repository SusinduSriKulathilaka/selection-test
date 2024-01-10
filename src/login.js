import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import store from "./stores/AuthProvider.js";
import {logIn}  from './stores/AuthProvider';
import { useSelector } from 'react-redux';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the credentials match
    if (username === 'admin' && password === '123') {
      // Log the user in and redirect them to the desired page
      // navigate("/dashboard");
      store.dispatch({ type: 'LOG_IN', payload: {user: true} });
      // console.log('Logged in successfully!');
    } else {
      // Display an error message
      console.log('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;