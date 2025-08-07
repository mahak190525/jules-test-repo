import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Typography, Grid, Card, CardContent } from '@mui/material';

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

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Welcome to your Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Upcoming Public Holidays */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Public Holidays
              </Typography>
              {upcomingHolidays.map((holiday) => (
                <Typography key={holiday.name}>
                  {holiday.date}: {holiday.name}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Leave Balance */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Leave Balance
              </Typography>
              <Typography>Annual Leave: {leaveBalance.annual}</Typography>
              <Typography>Sick Leave: {leaveBalance.sick}</Typography>
              <Typography>Casual Leave: {leaveBalance.casual}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Attendance Summary */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Attendance Summary (This Month)
              </Typography>
              <Typography>
                Worked Days: {attendanceSummary.workedDays} / {attendanceSummary.totalDays}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;
