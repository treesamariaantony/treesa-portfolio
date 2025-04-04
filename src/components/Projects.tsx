import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description:
        'A smart task management system that uses AI to prioritize and categorize tasks. Built with Python, FastAPI, and React.',
      image: '/project1.jpg',
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'PostgreSQL'],
      github: 'https://github.com/yourusername/ai-task-manager',
      demo: 'https://ai-task-manager.demo',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description:
        'A real-time analytics dashboard for monitoring system metrics. Implements WebSocket for live updates.',
      image: '/project2.jpg',
      technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Docker'],
      github: 'https://github.com/yourusername/analytics-dashboard',
      demo: 'https://analytics-dashboard.demo',
    },
    {
      title: 'Cloud-Native Microservices',
      description:
        'A suite of microservices for e-commerce platform. Includes order processing, inventory management, and payment services.',
      image: '/project3.jpg',
      technologies: ['Python', 'Kubernetes', 'gRPC', 'Redis', 'AWS'],
      github: 'https://github.com/yourusername/ecommerce-microservices',
      demo: 'https://ecommerce-microservices.demo',
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
          Projects
        </Typography>

        <Stack spacing={4}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: '100%', md: 400 },
                  height: { xs: 200, md: 300 },
                  objectFit: 'cover',
                }}
                image={project.image}
                alt={project.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                  <Button
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects; 