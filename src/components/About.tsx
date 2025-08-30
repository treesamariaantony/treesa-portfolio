import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const bio = "Highly accomplished and versatile Software Engineer with over 3 years of hands-on experience in architecting, developing, and deploying highly scalable, resilient, and secure full-stack and backend systems. I specialize in building innovative, AI-driven applications using Python (Django, FastAPI, Quart) and C#/.NET Core, with robust front-end skills in React and Vue.js. My expertise spans the entire software development lifecycle, from technical design and architectural choices to cloud-native deployments (AWS, Azure, GCP), CI/CD automation, and post-release monitoring. I am deeply committed to producing maintainable, robustly tested code and thrive on teamwork, mentoring junior developers, and knowledge sharing. Eager to leverage my passion for technology and problem-solving to contribute to cutting-edge projects and drive business success.";

  const details = [
    { label: 'STATUS', value: 'Available for new projects' },
    { label: 'LOCATION', value: 'Paris, Île-de-France' },
    { label: 'DISCIPLINE', value: 'Software Architect & Engineer' },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: '100%' }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: 'transparent',
            border: '2px solid',
            borderColor: 'primary.main',
            boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)',
          }}
        >
          <Grid container spacing={5}>
            {/* Left Column: Bio */}
            <Grid item xs={12} md={8}>
              <Typography variant="h2" gutterBottom sx={{ mb: 3 }}>
                Project Brief
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                {bio}
              </Typography>
            </Grid>

            {/* Right Column: Details & Headshot */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Headshot Placeholder */}
                <Box
                  sx={{
                    width: '100%',
                    pt: '100%', // 1:1 Aspect Ratio
                    backgroundColor: 'rgba(0, 191, 255, 0.1)',
                    border: '2px dashed',
                    borderColor: 'primary.main',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography sx={{ color: 'text.secondary' }}>HEADSHOT</Typography>
                </Box>

                <Divider sx={{ mb: 3, borderColor: 'rgba(0, 191, 255, 0.2)' }} />

                {/* Details */}
                {details.map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About; 