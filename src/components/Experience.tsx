import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: [
        'Led the development of scalable microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: [
        'Developed RESTful APIs using Python and FastAPI',
        'Optimized database queries improving response time by 50%',
        'Integrated third-party services and payment gateways',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'StartUp Solutions',
      period: '2019 - 2020',
      description: [
        'Built and maintained backend services using Node.js',
        'Implemented real-time data processing systems',
        'Collaborated with frontend team for API integration',
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
          Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography variant="h6" component="h3" gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                    {exp.description.map((item, i) => (
                      <Typography
                        component="li"
                        variant="body2"
                        key={i}
                        sx={{ mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience; 