

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Styles/style.css';

const Login = ({ setAuthData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    try {
      const response = await axios.post('https://quiz-server-d94n.onrender.com/api/login', formData);

      // Store token and username in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      // Optional: Set auth data in state
      setAuthData({ token: response.data.token, username: response.data.username });

      toast.success(`Welcome, ${response.data.username}!`);

      // Navigate immediately to the home page
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || 'Error during login!');
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      {/* ToastContainer should be placed here to handle the toasts globally */}
      <ToastContainer/>

      <div className="bg-white shadow-lg p-3 px-5 rounded col-lg-4 col-sm-6 col-md-6 col-10 mt-5 align-items-center">
        <div className="justify-content-center align-items-center d-flex">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ui-3d-01-of-3/100/UI_26-512.png"
            alt="Login Icon"
            className="img-fluid col-4 col-lg-3 col-sm-3 col-md-3"
          />
        </div>

        <form autoComplete="new-password" onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>

          {/* Email Field */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-success">
              <FaEnvelope style={{ color: 'white' }} />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
              autoComplete="off"
            />
          </div>

          {/* Password Field */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-danger">
              <FaLock style={{ color: 'white' }} />
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
              required
              autoComplete="off"
            />
          </div>

          {/* Submit Button */}
          <div className="justify-content-center align-items-center d-flex">
            <button
              type="submit"
              className="btn btn-success col-6 col-lg-7 rounded-pill"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-3">
          Don't Have An Account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
