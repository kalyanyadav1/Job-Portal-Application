// JobListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

const JobListing = ({ job }) => {
  return (
    <Link to={`/job/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">{job.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {job.company} - {job.location}
          </Typography>
          <Box sx={{ marginTop: '10px' }}>
            <Typography variant="body1">Salary: {job.salary}</Typography>
            <Typography variant="body1">Experience: {job.experience} years</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobListing;
