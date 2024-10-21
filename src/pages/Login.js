import React, { useState, useEffect } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import './Login.css';

const Login = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState({ userid: false, password: false });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); 

  useEffect(() => {
   
    setIsButtonEnabled(userid.trim() !== '' && password.trim() !== '');
  }, [userid, password]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 
    setIsError({ userid: false, password: false }); 

   
    let hasError = false;
    if (!userid) {
      setError('Userid is required');
      setIsError((prev) => ({ ...prev, userid: true }));
      hasError = true;
    }
    if (!password) {
      setError('Password is required');
      setIsError((prev) => ({ ...prev, password: true }));
      hasError = true;
    }

    if (hasError) return;

    
    console.log('Logging in with', { userid, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-center">Login Panel</h2>
        
        {error && <p className="error">{error}</p>}

        <TextField
          variant="outlined"
          placeholder="Userid"
          className="form-control"
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
          required
          error={isError.userid}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        
        />

        <TextField
          variant="outlined"
          placeholder="Password"
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={isError.password} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="primary" disabled={!isButtonEnabled}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
