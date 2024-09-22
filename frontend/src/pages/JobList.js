// JobList.js
import React from 'react';
import JobListing from './JobListing';
import { Grid } from '@mui/material';

const JobList = ({ jobs, filters }) => {
  // Apply filters
  const filteredJobs = jobs.filter((job) => {
    const jobTypeMatch = filters.jobType ? job.type === filters.jobType : true;
    const locationMatch = filters.location ? job.location === filters.location : true;
    const companyMatch = filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true;
    return jobTypeMatch && locationMatch && companyMatch;
  });

  return (
    <Grid container spacing={2}>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobListing job={job} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <p>No jobs found based on your filters.</p>
        </Grid>
      )}
    </Grid>
  );
};

export default JobList;
