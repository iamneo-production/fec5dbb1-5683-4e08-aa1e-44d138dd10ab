import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Grid, TextField } from '@mui/material';
import { AccountCircle, Lock, LockOutlined, MailOutline, PhoneAndroidOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/css/Register.css';
import axios from 'axios';
import { getRegister, postRegister } from '../Components/api';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  useEffect(() => {
  }, []);

  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    if (username.trim() === '') {
      formValid = false;
      newErrors.username = 'Username is required';
    }

    if (email.trim() === '') {
      formValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formValid = false;
      newErrors.email = 'Invalid email format';
    }

    if (phoneno.trim() === '') {
      formValid = false;
      newErrors.phoneno = 'Phone number is required';
    } else if (!/^\d+$/.test(phoneno.trim())) {
      formValid = false;
      newErrors.phoneno = 'Phone number should contain only digits';
    }

    if (password.trim() === '') {
      formValid = false;
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      formValid = false;
      newErrors.password = 'Password should be a minimum of 8 characters';
    }

    if (confirmPassword.trim() === '') {
      formValid = false;
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      formValid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        username: username,
        email: email,
        phoneno: phoneno,
        password: password,
        confirmPassword: confirmPassword,
      };

      if (details.some((user) => user.email === email)) {
        alert('User already exists.');
      } else {
        console.log(data);
        postRegister(data)
          .then(() => {
            setDetails([...details, data]);
            navigate('/');
          })
          .catch((error) => {
            console.error('Error while registering:', error);
            alert('Registration failed. Please try again later.');
          }
          );
      }
    }
  };

  return (
    <div className='body'>
      <div className='register-container'>
      <h2 className='reg-h2'>Register</h2>
      <div className='reg-Card'>
        <form className='reg-form' onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle />
            <TextField
              className='reg-input'
              id='username'
              label='Enter Username'
              variant='standard'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              required
            />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutline />
            <TextField
              className='reg-input'
              id='email'
              label='Enter Email'
              variant='standard'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PhoneAndroidOutlined />
            <TextField
              className='reg-input'
              id='phoneno'
              label='Enter PhoneNo.'
              value={phoneno}
              variant='standard'
              onChange={(e) => setPhoneNo(e.target.value)}
              error={!!errors.phoneno}
              helperText={errors.phoneno}
              required
            />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Lock />
            <TextField
              className='reg-input'
              id='password'
              label='Enter Password'
              variant='standard'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              required
            />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlined />
            <TextField
              className='reg-input'
              id='confirmPassword'
              label='Enter Confirm Password'
              variant='standard'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              required
            />
          </Box>
          <br />
          <Grid container justifyContent={'center'} alignItems='center'>
            <Grid item>
              <Checkbox className='a' required />
            </Grid>
            <Grid item>
              <label>
                I agree to all the terms and conditions
              </label>
            </Grid>
          </Grid>
          <br/>
          <button type='submit'>
     <span class="box">
    Register      </span>
 </button>
 <br/>
 <Link to='/login'>Already Registered? Login</Link>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;