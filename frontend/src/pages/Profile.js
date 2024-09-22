// Profile.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Profile = () => {
  const token = localStorage.getItem('token');

  // Fetch user data based on the token (omitted for simplicity)
  
  return (
    <Box sx={{ width: '300px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Profile</Typography>
      {/* Display user data here */}
      <Typography variant="body1">User Email: example@example.com</Typography>
    </Box>
  );
};

export default Profile;
