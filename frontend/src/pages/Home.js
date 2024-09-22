// HomePage.js
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import JobFilter from './Filters';
import JobList from './JobList';

// Sample job data (replace this with actual data or API calls)
const jobData = [
  { title: 'Software Engineer', company: 'Google', location: 'Hyderabad', salary: '12 LPA', experience: 3, type: 'Full-time' },
  { title: 'Frontend Developer', company: 'Amazon', location: 'Bangalore', salary: '10 LPA', experience: 2, type: 'Part-time' },
  { title: 'Backend Engineer', company: 'Microsoft', location: 'Remote', salary: '15 LPA', experience: 4, type: 'Full-time' },
  // More jobs...
];

const HomePage = () => {
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    company: '',
  });

  return (
    <Container>
      {/* Job Filters */}
      <Box>
        <JobFilter filters={filters} setFilters={setFilters} />
      </Box>

      {/* Job Listings */}
      <Box sx={{ marginTop: '20px' }}>
        <JobList jobs={jobData} filters={filters} />
      </Box>
    </Container>
  );
};

export default HomePage;
