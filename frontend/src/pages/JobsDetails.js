// JobDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box } from '@mui/material';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (!job) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4">{job.title}</Typography>
      <Typography variant="h6">Company: {job.company}</Typography>
      <Typography variant="body1">Location: {job.location}</Typography>
      <Typography variant="body1">Description: {job.description}</Typography>
      {/* Add more details as needed */}
    </Box>
  );
};

export default JobDetails;
