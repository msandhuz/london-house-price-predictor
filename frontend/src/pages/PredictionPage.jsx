import React, { useState } from 'react';
import { Container, Typography, Paper, Alert, Box } from '@mui/material';
import { predictPrice } from '../services/api';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    bedrooms: 2,
    bathrooms: 1,
    livingRooms: 1,
    floorAreaSqM: 80,
    propertyType: 'Purpose Built Flat',
    currentEnergyRating: 'C',
    confidenceLevel: 2
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await predictPrice(formData);
      setPrediction(response.prediction);
    } catch (err) {
      setError(err.response?.data?.error || 
              err.message || 
              'Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: 'rgb(215, 222, 207)', // Full background color
      py: 4 
    }}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            color: 'rgb(110, 128, 102)',
            mb: 4 
          }}
        >
          Price Prediction
        </Typography>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4, 
            backgroundColor: 'rgb(252, 249, 245)' // Prediction box color
          }}
        >
          <PredictionForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </Paper>

        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 3,
              backgroundColor: 'rgb(252, 249, 245)'
            }}
          >
            {error}
          </Alert>
        )}

        {prediction && (
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              backgroundColor: 'rgb(252, 249, 245)' // Result box same as form
            }}
          >
            <PredictionResult prediction={prediction} formData={formData} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default PredictionPage;