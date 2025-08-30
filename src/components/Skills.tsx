import React from 'react';
import { Box, Typography, Paper, Chip, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import ClearIcon from '@mui/icons-material/Clear';

interface SkillsProps {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
}

const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: ['C#', '.NET Core', 'JavaScript', 'Java', 'Spring Boot', 'Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'Quart', 'React', 'SQL', 'TypeScript', 'Vue.js'],
    },
    {
      category: 'AI, Data, & Databases',
      skills: ['AI-driven Workflows', 'Data Mining', 'Data Pipelines', 'Generative AI', 'LLMs', 'OpenAI', 'Prompt Engineering', 'Celery', 'Cosmos DB', 'Kafka', 'MongoDB', 'MySQL', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    },
    {
      category: 'Cloud, DevOps & Tools',
      skills: ['AWS', 'Azure', 'Azure DevOps', 'Docker', 'Git', 'GCP', 'Jenkins', 'Kubernetes', 'SonarQube', 'Terraform'],
    },
    {
      category: 'Architecture, Security & Quality',
      skills: ['Agile Methodologies', 'Clean Architecture', 'Event-driven Architecture', 'Microservices', 'Performance Optimization', 'RESTful APIs', 'Scalability', 'SDLC', 'JWT', 'OAuth 2.0', 'OWASP Top 10', 'RBAC', 'Secure Software Development', 'TDD', 'Pytest', 'XUnit', 'Code Review', 'End-to-End Testing', 'Integration Testing', 'Production Support'],
    }
];

const Skills: React.FC<SkillsProps> = ({ activeSkill, setActiveSkill }) => {

  const handleSkillClick = (skill: string) => {
    // Toggle functionality: if clicking the same skill, deactivate it.
    if (activeSkill === skill) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
        Skills Workbench
      </Typography>
      <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary', textAlign: 'center', maxWidth: '600px' }}>
        This is an interactive workbench. Click any skill to cross-reference it with projects and experiences throughout this portfolio.
      </Typography>

      {activeSkill && (
        <Button
          variant="outlined"
          startIcon={<ClearIcon />}
          onClick={() => setActiveSkill(null)}
          sx={{ mb: 4 }}
        >
          Clear Filter: {activeSkill}
        </Button>
      )}

      <Grid container spacing={4}>
        {skillCategories.map((cat, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(0, 191, 255, 0.3)',
                }}
              >
                <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>{cat.category}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cat.skills.map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant={activeSkill === skill ? 'filled' : 'outlined'}
                      color="primary"
                      onClick={() => handleSkillClick(skill)}
                      sx={{ cursor: 'pointer' }}
                      icon={activeSkill === skill ? <FilterCenterFocusIcon /> : undefined}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 