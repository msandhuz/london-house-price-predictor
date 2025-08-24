import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography, Paper, Stack } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ formData }) => {
  const chartData = {
    labels: ['Bedrooms', 'Bathrooms', 'Living Rooms'],
    datasets: [
      {
        data: [  // Removed label here since we'll use the category labels
          formData.bedrooms,
          formData.bathrooms,
          formData.livingRooms
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <Stack spacing={2}>
      {/* Floor Area Display */}
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1">Floor Area</Typography>
        <Typography variant="h5" color="primary">
          {formData.floorAreaSqM} m²
        </Typography>
      </Paper>

      {/* Chart with improved options */}
      <Box sx={{ height: 250, position: 'relative' }}>
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false  // Disabled since we don't need it
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.parsed.y}`
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                  precision: 0
                },
                title: {
                  display: true,
                  text: 'Count'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Room Type'
                }
              }
            }
          }}
        />
      </Box>
    </Stack>
  );
};

export default PriceChart;