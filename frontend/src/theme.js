import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(110, 128, 102)',
      light: 'rgb(151, 174, 135)',
    },
    secondary: {
      main: 'rgb(168, 132, 108)',
    },
    background: {
      default: 'rgb(215, 222, 207)', // Full page background
      paper: 'rgb(252, 249, 245)',   // Content boxes
    },
    text: {
      primary: 'rgb(50, 50, 50)',
      secondary: 'rgb(110, 128, 102)',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(215, 222, 207)',
          color: 'rgb(50, 50, 50)',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgb(200, 210, 195)',
          },
          '&:disabled': {
            backgroundColor: 'rgb(180, 190, 175)',
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(252, 249, 245)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(252, 249, 245)',
        },
      },
    },
  },
});

export default theme;