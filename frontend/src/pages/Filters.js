import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid, Typography } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Filter Jobs
      </Typography>

      <Grid container spacing={2}>
        {/* Job Type Filter */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select
              labelId="job-type-label"
              name="jobType"
              value={filters.jobType || ''}
              onChange={handleChange}
              label="Job Type"  // Fix for label floating
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Location Filter */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              name="location"
              value={filters.location || ''}
              onChange={handleChange}
              label="Location"  // Fix for label floating
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Company Filter */}
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={filters.company || ''}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '20px' }}
        onClick={() => setFilters({ jobType: '', location: '', company: '' })}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default Filter;
