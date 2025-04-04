import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Treesa Maria Antony. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              component={Link}
              href="mailto:your.email@example.com"
              color="inherit"
              aria-label="email"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="linkedin"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="github"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 