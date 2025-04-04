import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  LinearProgress,
  Grid,
} from '@mui/material';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Django/FastAPI', level: 88 },
        { name: 'RESTful APIs', level: 92 },
      ],
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS', level: 82 },
        { name: 'Docker/Kubernetes', level: 78 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'OpenAI API', level: 85 },
        { name: 'Natural Language Processing', level: 80 },
        { name: 'Computer Vision', level: 70 },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 85 },
        { name: 'System Design', level: 88 },
        { name: 'Agile/Scrum', level: 85 },
      ],
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  {category.category}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1">{skill.name}</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 