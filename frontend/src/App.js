import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PredictionPage from './pages/PredictionPage';
import VisualizationsPage from './pages/VisualizationsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          backgroundColor: 'rgb(215, 222, 207)' // Full background color
        }}>
          <Navbar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              pt: 8, 
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/predict" element={<PredictionPage />} />
              <Route path="/visualizations" element={<VisualizationsPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;