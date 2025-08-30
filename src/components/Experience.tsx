import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExperienceProps {
  activeSkill: string | null;
}

const experiences = [
  {
      title: 'Fullstack Software Engineer | AI Chatbot & Finance SaaS Projects',
      company: 'Mantu - Amaris Consulting, Lyon, France',
      period: '09/2024 - 03/2025',
      description: [
        'Architected and led the full-stack development of a generative AI ChatBot (Python/Quart, React/TypeScript) and a financial SaaS platform (C#/.NET Core, Vue.js) on Azure.',
        'Pioneered user-specific AI chatbot features, including real-time chat streaming, document analysis, and video transcription using Azure AI services.',
        'Engineered a secure, high-performance fintech platform with a multi-country ledger using C#/.NET Core and Clean Architecture principles.',
        'Developed and published reusable Nuget packages, boosting team productivity by 30%.',
        'Owned end-to-end CI/CD and production operations with Azure DevOps, Docker, and Kubernetes.',
      ],
  },
  {
      title: 'Associate Backend Developer',
      company: 'Shadowfax Technologies Pvt Ltd, Bengaluru, India',
      period: '07/2021 - 08/2023',
      description: [
        'Designed and developed scalable RESTful APIs using Python and Django in a microservices architecture.',
        'Built asynchronous, event-driven services using Kafka, RabbitMQ, Celery, and Redis.',
        'Optimized critical database performance by redesigning schemas and fine-tuning queries in MySQL and PostgreSQL, boosting query speed by 25%.',
        'Orchestrated production deployments on AWS (EKS, EC2, Lambda, S3), accelerating deployments by 40% and reducing costs by 20%.',
        'Provided production support and issue resolution using the ELK Stack, Sentry, and Grafana.',
      ],
  },
  {
      title: 'Full-Stack Developer (Internship)',
      company: 'Health Amaze, Bangalore, India',
      period: '07/2020 - 08/2020',
      description: [
        'Developed secure and scalable full-stack applications with Node.js/Express.js and Vue.js/Vuetify.',
        'Managed cloud-based application deployment and monitoring on Google Cloud Platform (Firebase).',
      ],
  },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: 'none',
  transition: 'opacity 0.5s ease',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 'auto',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'rgba(0, 191, 255, 0.1)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const Experience: React.FC<ExperienceProps> = ({ activeSkill }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 5, textAlign: 'center' }}>
        Construction Timeline
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '800px' }}>
        {experiences.map((exp, index) => {
          const descriptionString = exp.description.join(' ');
          const isRelevant = activeSkill ? descriptionString.toLowerCase().includes(activeSkill.toLowerCase()) : true;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isRelevant ? 1 : 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledAccordion>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                >
                  <Box>
                    <Typography variant="h6" component="h3">{exp.title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>{exp.company}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{exp.period}</Typography>
                  </Box>
                </StyledAccordionSummary>
                <AccordionDetails sx={{ p: 3, backgroundColor: 'background.paper' }}>
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    {exp.description.map((item, i) => (
                      <li key={i}><Typography variant="body2">{item}</Typography></li>
                    ))}
                  </ul>
                </AccordionDetails>
              </StyledAccordion>
            </motion.div>
          )
        })}
      </Box>
    </Box>
  );
};

export default Experience; 