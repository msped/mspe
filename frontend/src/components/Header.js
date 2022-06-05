import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Sidebar from '../components/Sidebar'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar id="back-to-top-anchor">
          <Sidebar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            Matt Edwards
          </Typography>
          <Button
            color="primary"
            href='/cv'
            variant='contained'
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}