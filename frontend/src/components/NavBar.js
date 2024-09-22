// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Simulate user authentication status
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
          {isAuthenticated && (
            <>
              <Button color="inherit" component={Link} to="/profile">Profile</Button>
              <Button color="inherit" component={Link} to="/job-details">Job Details</Button>
            </>
          )}
          {!isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/login">Log In</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/'; // Redirect to home after logging out
            }}>Log Out</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
