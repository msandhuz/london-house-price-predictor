import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Predict Price', path: '/predict' },
    { label: 'Visualizations', path: '/visualizations' }
  ];

  return (
    <AppBar 
      position="sticky"
      elevation={2}
      sx={{
        top: 0,
        zIndex: 1100,
        backgroundColor: 'rgb(110, 128, 102)', // Dark green background
      }}
    >
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              height: '40px', 
              width: '40px', 
              marginRight: '12px',
              borderRadius: '4px'
            }}
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              display: { xs: 'none', sm: 'block' } // Hide on mobile if needed
            }}
          >
            London House Price Predictor
          </Typography>
        </Box>

        {/* Navigation Items */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => navigate(item.path)}
              sx={{
                color: 'white', // White text
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white'
                },
                border: location.pathname === item.path ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;