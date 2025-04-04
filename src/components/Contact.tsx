import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Get in Touch
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' } }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out to me for any questions or opportunities.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Connect with me:
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    href="mailto:your.email@example.com"
                    color="primary"
                    aria-label="email"
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label="linkedin"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label="github"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ flex: { xs: '1', md: '1 1 50%' } }}>
            <Paper
              elevation={3}
              component="form"
              onSubmit={handleSubmit}
              sx={{ p: 4 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Send a Message
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 