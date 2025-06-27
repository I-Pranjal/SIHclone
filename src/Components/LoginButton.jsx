import React, { useContext } from 'react';
import { userContext } from '../Pages/Login';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  const user = useContext(userContext);

  return (
    <div className="flex items-center gap-2 sm:gap-4 px-2 py-1 text-sm sm:text-base">
      <span className="text-gray-800 font-medium truncate max-w-[150px] sm:max-w-none">
        {user
          ? `Welcome, ${user.fname} ${user.lname}`
          : 'Smart India Hackathon Login / Register'}
      </span>
      <Link to="/login">
        <img
          src="/login.png"  // ✅ Corrected image path
          alt="Login"
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
      </Link>
    </div>
  );
};

export default LoginButton;
