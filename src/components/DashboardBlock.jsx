import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const DashboardBlock = ({ title, icon, children }) => {
  return (
    <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      {children}
    </Paper>
  );
};

export default DashboardBlock;
