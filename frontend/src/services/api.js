import axios from 'axios';

export const predictPrice = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5100/predict', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: false
    });
    return response.data;
  } catch (error) {
    // Improve error handling
    if (error.response) {
      throw new Error(error.response.data.error || 'Server responded with an error');
    } else if (error.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error('Error making request: ' + error.message);
    }
  }
};