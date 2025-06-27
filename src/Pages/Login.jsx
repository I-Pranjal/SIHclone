import React, { useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

export const userContext = React.createContext();

export default function Login({ setUserDetails }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const navigate = useNavigate();

  const userCollectionRef = collection(db, 'users');

  const details = { lname, fname, mail, password, role };

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

      const userFound = jsonData.find(
        (user) =>
          user.email === mail &&
          user.password === password &&
          user.role === role
      );

      if (userFound) {
        setUserDetails(userFound);
        alert('Login successful!');
        navigate('/admin');
      } else {
        await createUser();
        alert('User not found. Created new user.');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Error occurred. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mail || !password || !role || !fname || !lname || role === 'Please select user role') {
      alert('Please fill in all fields!');
      return;
    }

    try {
      await fetchUser();
      setMail('');
      setPassword('');
      setRole('');
      setFname('');
      setLname('');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <userContext.Provider value={details}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Register / Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option disabled value="">Please select user role</option>
              <option>Super Admin</option>
              <option>College/Institute SPOC</option>
              <option>Team Leader</option>
            </select>

            <div className="text-right">
              <a href="#" className="text-blue-600 text-sm hover:underline">Forgot your password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </userContext.Provider>
  );
}
