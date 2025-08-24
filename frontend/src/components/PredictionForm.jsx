import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Stack
} from '@mui/material';

const propertyTypes = ['Purpose Built Flat', 'Semi-Detached', 'Detached', 'Terraced'];
const energyRatings = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Unknown'];

const PredictionForm = ({ formData, handleChange, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <TextField
            fullWidth
            label="Latitude"
            name="latitude"
            type="number"
            value={formData.latitude}
            onChange={handleChange}
            required
            inputProps={{ step: "0.0001" }}
          />
          <TextField
            fullWidth
            label="Longitude"
            name="longitude"
            type="number"
            value={formData.longitude}
            onChange={handleChange}
            required
            inputProps={{ step: "0.0001" }}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <TextField
            fullWidth
            label="Bedrooms"
            name="bedrooms"
            type="number"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            inputProps={{ min: 1 }}
          />
          <TextField
            fullWidth
            label="Bathrooms"
            name="bathrooms"
            type="number"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            inputProps={{ min: 1 }}
          />
          <TextField
            fullWidth
            label="Living Rooms"
            name="livingRooms"
            type="number"
            value={formData.livingRooms}
            onChange={handleChange}
            required
            inputProps={{ min: 1 }}
          />
        </Stack>

        <TextField
          fullWidth
          label="Floor Area (sqm)"
          name="floorAreaSqM"
          type="number"
          value={formData.floorAreaSqM}
          onChange={handleChange}
          required
          inputProps={{ min: 20 }}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <FormControl fullWidth>
            <InputLabel>Property Type</InputLabel>
            <Select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              label="Property Type"
            >
              {propertyTypes.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Energy Rating</InputLabel>
            <Select
              name="currentEnergyRating"
              value={formData.currentEnergyRating}
              onChange={handleChange}
              required
              label="Energy Rating"
            >
              {energyRatings.map(rating => (
                <MenuItem key={rating} value={rating}>{rating}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Confidence Level</InputLabel>
            <Select
              name="confidenceLevel"
              value={formData.confidenceLevel}
              onChange={handleChange}
              required
              label="Confidence Level"
            >
              <MenuItem value={0}>Low</MenuItem>
              <MenuItem value={1}>Medium</MenuItem>
              <MenuItem value={2}>High</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          disabled={loading}
          sx={{ 
            py: 2,
            backgroundColor: 'rgb(215, 222, 207)',
            color: 'rgb(50, 50, 50)',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'rgb(200, 210, 195)',
            },
            '&:disabled': {
              backgroundColor: 'rgb(180, 190, 175)',
            }
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Predict Price'}
        </Button>
      </Stack>
    </form>
  );
};

export default PredictionForm;