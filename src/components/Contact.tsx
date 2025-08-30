import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd handle form submission here.
  };

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/treesamariaantony', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/treesa-maria-antony-04aa5816a', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:tresatritto28@gmail.com', label: 'Email' },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: '100%', maxWidth: '1000px' }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: 'transparent',
            border: '2px solid',
            borderColor: 'rgba(0, 191, 255, 0.3)',
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ mb: 5, textAlign: 'center' }}>
            Approval & Sign-off
          </Typography>
          <Grid container spacing={5}>
            {/* Left Column: Form */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" sx={{ mb: 3 }}>Transmit Message</Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Your Name" variant="outlined" required fullWidth />
                <TextField label="Your Email" type="email" variant="outlined" required fullWidth />
                <TextField label="Message" multiline rows={5} variant="outlined" required fullWidth />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitted}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    backgroundColor: isSubmitted ? 'green' : 'primary.main',
                    '&:hover': {
                        backgroundColor: isSubmitted ? 'green' : 'primary.dark',
                    }
                  }}
                >
                  {isSubmitted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircleIcon sx={{ mr: 1 }} /> Transmitted
                    </motion.div>
                  ) : 'Finalize & Transmit'}
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Contact Info */}
            <Grid item xs={12} md={5}>
              <Typography variant="h5" sx={{ mb: 3 }}>Schematic Details</Typography>
              <Box>
                {socialLinks.map(link => (
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" key={link.label} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}>
                    {link.icon}
                    <Typography sx={{ ml: 2 }}>{link.label}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact; 