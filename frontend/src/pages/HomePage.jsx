import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: 'rgb(252, 249, 245)' }}>
        <Box sx={{ mb: 4 }}>
          <img 
            src="/logo.png" 
            alt="London House Price Predictor Logo" 
            style={{ maxWidth: '200px', height: 'auto' }}
          />
        </Box>
        
        <Typography variant="h3" gutterBottom sx={{ color: 'rgb(110, 128, 102)', mb: 3 }}>
          Welcome to London House Price Predictor
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.6, color: 'rgb(80, 80, 80)' }}>
          Advanced machine learning tool for accurate London property price predictions
        </Typography>
        
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Our sophisticated prediction model analyzes various property features including location, 
            size, amenities, and market trends to provide you with accurate price estimates for 
            properties across London.
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Whether you're a homeowner, buyer, or real estate professional, our tool helps you make 
            informed decisions about property investments in the London market.
          </Typography>
          
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Get started by using our prediction form, or explore our visualizations to understand 
            market trends and patterns.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;