import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgb(110, 128, 102)',
        color: 'white',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2025 London House Price Predictor. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          This tool uses machine learning to predict house prices in London based on property features.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          Data sourced from reliable real estate market information.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;