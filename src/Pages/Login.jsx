import React, { useState } from 'react';
import '../Components/styling.css';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { redirect } from 'react-router-dom';

export const userContext = React.createContext();

export default function Login({ setUserDetails }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const userCollectionRef = collection(db, 'users');

  const details = {
    lname,
    fname,
    mail,
    password,
    role,
  };

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      email: mail,
      password: password,
      role: role,
      fname: fname,
      lname: lname,
    });
    alert('New user created successfully!');
  };

  const fetchUser = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const jsonData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Check if the user exists with the given credentials
      const userFound = jsonData.find(
        (user) =>
          user.email === mail &&
          user.password === password &&
          user.role === role
      );

      if (userFound) {
        console.log('User found:', userFound);
        setUserDetails(userFound);
        redirect(www.google.com);
        alert('User found! Login successful.');
        navigate('/admin'); // Navigate to the admin section
      } else {
        await createUser(); // Create user in Firestore
        console.log('Form submitted:', { mail, password, role });
        alert('No matching user found! New user has been created.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Error fetching user data. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mail || !password || !role || role === 'Please select user role') {
      alert('Please enter all values!');
      return;
    }

    try {
      await fetchUser(); // Check if user exists
      // Reset each property
      setMail('');
      setPassword('');
      setRole('');
      setFname('');
      setLname('');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <userContext.Provider value={details}>
      <div className='container login'>
        <h1>REGISTER HERE</h1>
        <div
          style={{
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '3rem 0',
          }}
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <input
              type='text'
              placeholder='Your First Name'
              id='login-input'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type='text'
              placeholder='Last Name'
              id='login-input'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type='text'
              placeholder='Enter your email ID'
              id='login-input'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Enter your password'
              id='login-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              id='login-input'
            >
              <option>Please select user role</option>
              <option>Super Admin</option>
              <option>College/Institute SPOC</option>
              <option>Team Leader</option>
            </select>

            <a href='#' style={{ padding: '1rem' }}>
              Forgot your password?
            </a>
            <button onClick={handleSubmit} id='loginbtn'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </userContext.Provider>
  );
}
