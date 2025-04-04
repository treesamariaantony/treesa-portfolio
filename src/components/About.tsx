import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const About = () => {
  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Backend Development',
      description: 'Expertise in building scalable and maintainable backend systems using Python, Node.js, and modern frameworks.',
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      title: 'Database Design',
      description: 'Proficient in designing and optimizing database schemas, working with both SQL and NoSQL databases.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Solutions',
      description: 'Experience with cloud platforms and deploying scalable applications using AWS and Azure services.',
    },
  ];

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
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Who I Am
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a passionate Backend Engineer with a strong focus on building robust
              and scalable systems. With expertise in both traditional backend
              development and modern cloud technologies, I strive to create efficient
              and maintainable solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              My journey in software development began with a deep interest in
              problem-solving and system design. Over the years, I've had the
              opportunity to work on various challenging projects that have shaped my
              expertise in backend development and cloud architecture.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              What I Do
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {skills.map((skill, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main' }}>{skill.icon}</Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 