import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Modal,
  IconButton
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';

const VisualizationsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const visualizations = [
    {
      filename: 'price_distribution.png',
      title: 'Price Distribution',
      description: 'Distribution of house prices across London',
      category: 'Market Trends'
    },
    {
      filename: 'price_vs_area.png',
      title: 'Price vs Area',
      description: 'Relationship between price and floor area',
      category: 'Correlation'
    },
    {
      filename: 'price_trend.png',
      title: 'Price Trend',
      description: 'Historical price trends over time',
      category: 'Market Trends'
    },
    {
      filename: 'correlation_heatmap.png',
      title: 'Correlation Heatmap',
      description: 'Correlation between different features',
      category: 'Analysis'
    },
    {
      filename: 'price_by_type.png',
      title: 'Price by Property Type',
      description: 'Average prices by property type',
      category: 'Property Types'
    },
    {
      filename: 'price_by_bedrooms.png',
      title: 'Price by Bedrooms',
      description: 'Price distribution by number of bedrooms',
      category: 'Property Features'
    },
    {
      filename: 'geographic_distribution.png',
      title: 'Geographic Distribution',
      description: 'Price distribution across London areas',
      category: 'Location'
    },
    {
      filename: 'feature_relationships.png',
      title: 'Feature Relationships',
      description: 'Relationships between different property features',
      category: 'Analysis'
    }
  ];

  const handleImageClick = (viz) => {
    setSelectedImage(viz);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: 'rgb(252, 249, 245)',
      py: 4 
    }}>
      <Container minWidth="lg"> {/* Changed from xl to lg for better centering */}
        <Typography 
          variant="h2" 
          gutterBottom 
          align="center" 
          sx={{ 
            color: 'rgb(110, 128, 102)',
            mb: 2,
            fontWeight: 'bold'
          }}
        >
          Market Insights
        </Typography>
        
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            color: 'rgb(110, 128, 102)',
            mb: 6,
            minWidth: '600px',
            mx: 'auto'
          }}
        >
          Explore comprehensive visualizations of London's housing market trends and patterns
        </Typography>

        <Grid container spacing={4} justifyContent="center"> {/* Added justifyContent center */}
          {visualizations.map((viz) => (
            <Grid item xs={12} md={6} key={viz.filename}> {/* Removed lg={4} to have 2 columns */}
              <Card 
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  },
                  backgroundColor: 'rgb(252, 249, 245)',
                  border: '1px solid rgb(215, 222, 207)',
                  cursor: 'pointer',
                  position: 'relative',
                  mx: 'auto', // Center the card horizontally
                  minWidth: 400 // Limit maximum width for consistency
                }}
                onClick={() => handleImageClick(viz)}
              >
                {/* Zoom indicator */}
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 1)'
                    },
                    zIndex: 2
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(viz);
                  }}
                >
                  <ZoomIn sx={{ color: 'rgb(110, 128, 102)' }} />
                </IconButton>

                {/* Image container with fixed aspect ratio */}
                <Box sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '75%', // 4:3 aspect ratio
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CardMedia
                    component="img"
                    image={`/images/${viz.filename}`}
                    alt={viz.title}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '90%',
                      height: '90%',
                      objectFit: 'contain',
                      p: 2
                    }}
                  />
                </Box>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'rgb(110, 128, 102)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}
                    >
                      {viz.title}
                    </Typography>
                    <Chip
                      label={viz.category}
                      size="small"
                      sx={{
                        backgroundColor: 'rgb(151, 174, 135)',
                        color: 'white',
                        fontSize: '0.7rem'
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgb(100, 100, 100)',
                      lineHeight: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {viz.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal for enlarged image */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Box sx={{
            position: 'relative',
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                },
                zIndex: 1
              }}
              onClick={handleCloseModal}
            >
              <Close />
            </IconButton>
            
            {selectedImage && (
              <Box sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ color: 'rgb(110, 128, 102)', mb: 2, textAlign: 'center' }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgb(100, 100, 100)', mb: 3, textAlign: 'center' }}>
                  {selectedImage.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={`/images/${selectedImage.filename}`}
                    alt={selectedImage.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: 'rgb(150, 150, 150)', mt: 2, textAlign: 'center' }}>
                  Click anywhere outside or press close to exit
                </Typography>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default VisualizationsPage;