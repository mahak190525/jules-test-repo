import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Typography, Grid, Box, Paper, TextField, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DashboardPage = () => {
  // Hardcoded data for now
  const upcomingHolidays = [
    { date: '2024-10-02', name: 'Gandhi Jayanti' },
    { date: '2024-10-31', name: 'Diwali' },
  ];

  const leaveBalance = {
    annual: 10,
    sick: 5,
    casual: 5,
  };

  const attendanceSummary = {
    workedDays: 20,
    totalDays: 22,
  };

  const [project, setProject] = useState('');
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');

  const handleQuickEntrySubmit = (e) => {
    e.preventDefault();
    // Handle quick entry submission logic here
    console.log({ project, task, hours });
    setProject('');
    setTask('');
    setHours('');
  };

  const NotionBlock = ({ title, icon, children }) => (
    <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {icon}
        <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      {children}
    </Paper>
  );

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Welcome to your Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Quick Entry */}
        <Grid item xs={12}>
          <NotionBlock title="Quick Entry" icon={<AddCircleOutlineIcon />}>
            <Box component="form" onSubmit={handleQuickEntrySubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Project"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Task Description"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    label="Hours"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button type="submit" variant="contained" fullWidth>
                    Log Time
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </NotionBlock>
        </Grid>

        {/* Upcoming Public Holidays */}
        <Grid item xs={12} md={4}>
          <NotionBlock title="Upcoming Holidays" icon={<EventIcon />}>
            {upcomingHolidays.map((holiday) => (
              <Typography key={holiday.name} variant="body2">
                {holiday.date}: {holiday.name}
              </Typography>
            ))}
          </NotionBlock>
        </Grid>

        {/* Leave Balance */}
        <Grid item xs={12} md={4}>
          <NotionBlock title="Leave Balance" icon={<AccountBalanceWalletIcon />}>
            <Typography variant="body2">Annual Leave: {leaveBalance.annual}</Typography>
            <Typography variant="body2">Sick Leave: {leaveBalance.sick}</Typography>
            <Typography variant="body2">Casual Leave: {leaveBalance.casual}</Typography>
          </NotionBlock>
        </Grid>

        {/* Attendance Summary */}
        <Grid item xs={12} md={4}>
          <NotionBlock title="Attendance Summary" icon={<CheckCircleOutlineIcon />}>
            <Typography variant="body2">
              Worked Days: {attendanceSummary.workedDays} / {attendanceSummary.totalDays}
            </Typography>
          </NotionBlock>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;
