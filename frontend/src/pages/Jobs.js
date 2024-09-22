// src/components/JobListing.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JobFilter from './Filters';

// Sample job data
const jobData = [
    { id: 1, title: 'Full Stack Developer', company: 'TechCorp Inc.', location: 'Hyderabad', salary: 1800000, experience: 3, jobType: 'Full-time', description: 'Full Stack Developer with experience in JavaScript, React, and Node.js.' },
    { id: 2, title: 'Frontend Developer', company: 'Innovate Solutions', location: 'Bangalore', salary: 1000000, experience: 1, jobType: 'Part-time', description: 'Frontend Developer with a passion for UI/UX and experience in React and Material-UI.' },
    { id: 3, title: 'Backend Developer', company: 'CloudTech Systems', location: 'Remote', salary: 1200000, experience: 2, jobType: 'Remote', description: 'Backend Developer with experience in Node.js, Express, and MongoDB required for remote work.' },
    { id: 4, title: 'Data Scientist', company: 'Analytics Hub', location: 'Delhi', salary: 2500000, experience: 5, jobType: 'Full-time', description: 'Data Scientist with a strong background in machine learning and data analytics.' },
];

const JobListing = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({ jobType: '', location: '', company: '' });

    const filteredJobs = jobData.filter((job) => {
        return (
            (filters.jobType ? job.jobType === filters.jobType : true) &&
            (filters.location ? job.location === filters.location : true) &&
            (filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true)
        );
    });

    const handleViewDetails = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <JobFilter filters={filters} setFilters={setFilters} />

            <Typography variant="h3" gutterBottom>
                Available Jobs
            </Typography>

            <Grid container spacing={4}>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <Grid item xs={12} sm={6} md={4} key={job.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{job.title}</Typography>
                                    <Typography variant="body1">{job.company}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Location: {job.location}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Salary: ₹{job.salary.toLocaleString()}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Experience: {job.experience} years
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginTop: '10px' }}
                                        onClick={() => handleViewDetails(job.id)}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6">No jobs found with the selected filters.</Typography>
                )}
            </Grid>
        </Box>
    );
};

export default JobListing;
