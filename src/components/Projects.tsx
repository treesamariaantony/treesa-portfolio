import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Chip, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectsProps {
  activeSkill: string | null;
}

const projects = [
  {
    id: 1,
    title: 'MobileSAM – Satellite Image Segmentation API',
    shortDescription: 'A high-performance Python FastAPI microservice for satellite image segmentation.',
    fullDescription: 'Architected and developed a high-performance Python FastAPI microservice for satellite image segmentation (crop detection), leveraging asynchronous capabilities and microservices architecture. Containerized with Docker and deployed via Kubernetes on GCP, showcasing cloud-native AI deployment patterns.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'GCP'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Eventure – Real-Time Event Platform',
    shortDescription: 'A full-stack event management platform using Java Spring Boot and React.',
    fullDescription: 'Engineered a full-stack event management platform using Java Spring Boot, React, and Socket.IO for real-time communication. Implemented secure authentication with Keycloak and deployed the application via GitLab CI/CD and Terraform on GCP.',
    technologies: ['Java', 'Spring Boot', 'React', 'Socket.IO', 'Keycloak', 'GitLab CI/CD', 'Terraform', 'GCP'],
    github: '#',
    demo: '#',
  },
];

const Projects: React.FC<ProjectsProps> = ({ activeSkill }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', width: '100%' }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 5, textAlign: 'center' }}>
        Project Schematics
      </Typography>

      <Grid container spacing={4}>
        {projects.map(project => {
          const isRelevant = activeSkill ? project.technologies.includes(activeSkill) : true;
          return (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div
                layoutId={`card-container-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                style={{ cursor: 'pointer' }}
                animate={{ opacity: isRelevant ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'rgba(0, 191, 255, 0.3)',
                    backgroundColor: 'background.paper',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)',
                    }
                  }}
                >
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    {project.shortDescription}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          )
        })}
      </Grid>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedId}`}
              style={{
                  width: 'min(90%, 800px)',
                  maxHeight: '90vh',
                  overflowY: 'auto',
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the card
            >
              <Paper
                elevation={10}
                sx={{
                  p: { xs: 3, md: 5 },
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4">{selectedProject.title}</Typography>
                  <IconButton onClick={() => setSelectedId(null)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Typography sx={{ my: 3 }}>{selectedProject.fullDescription}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
                  {selectedProject.technologies.map(tech => (
                    <Chip key={tech} label={tech} variant="outlined" color="primary" />
                  ))}
                </Box>
                <Box>
                  <Button startIcon={<GitHubIcon />} href={selectedProject.github} target="_blank">Code</Button>
                  <Button startIcon={<LaunchIcon />} href={selectedProject.demo} target="_blank" sx={{ ml: 2 }}>Live Demo</Button>
                </Box>
              </Paper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Projects; 