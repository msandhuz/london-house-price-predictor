import React from 'react';
import { Paper, Typography, Box, Stack, Divider } from '@mui/material';
import PriceChart from './PriceChart';
import LocationMap from './LocationMap';

const PredictionResult = ({ prediction, formData }) => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: 'rgb(110, 128, 102)' }}>
        Prediction Result
      </Typography>
      <Typography variant="h3" color="primary" gutterBottom>
        £{prediction.toLocaleString('en-UK', { maximumFractionDigits: 0 })}
      </Typography>

      <Stack spacing={4} mt={4}>
        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: 'rgb(110, 128, 102)' }}>
            Property Features
          </Typography>
          <PriceChart formData={formData} />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: 'rgb(110, 128, 102)' }}>
            Property Location
          </Typography>
          <LocationMap
            latitude={parseFloat(formData.latitude)}
            longitude={parseFloat(formData.longitude)}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default PredictionResult;