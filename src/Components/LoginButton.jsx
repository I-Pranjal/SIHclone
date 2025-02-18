import React, { useContext } from 'react';
import { userContext } from '../Pages/Login';
import { Link } from 'react-router-dom';
import './styling.css'

const LoginButton = () => {
  const user = useContext(userContext);

  return (
    <div className="loginButton">
      <span>{user ? `Welcome, ${user.fname} ${user.lname}` : 'Smart India Hackathon Login / Register '}</span>
      <Link to="/login">
        <img src="./login.png" alt="Login" id='loginImage' />
      </Link>
    </div>
  );
};

export default LoginButton;
