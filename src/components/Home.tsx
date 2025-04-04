import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              mb: 4,
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Treesa Maria Antony
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontWeight: 500,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Backend Engineer & AI Solutions Developer
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Specializing in building robust backend systems and innovative AI solutions.
            Let's create something amazing together.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 