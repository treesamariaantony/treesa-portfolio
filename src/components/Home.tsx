import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const name = "Treesa Maria Antony";
  const title = "Software Architect & Engineer";

  // Animation variants for the container of letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.04 },
    }),
  };

  // Animation variants for each letter
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        // Creating a blueprint grid background
        background: (theme) => `
          linear-gradient(${theme.palette.background.default} 2px, transparent 2px),
          linear-gradient(90deg, ${theme.palette.background.default} 2px, transparent 2px),
          linear-gradient(rgba(25, 43, 71, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(25, 43, 71, 0.5) 1px, transparent 1px);
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
        color: 'text.primary',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          overflow: 'hidden',
          padding: '10px',
          border: '2px solid #00bfff',
          marginBottom: '2rem',
          boxShadow: '0 0 15px rgba(0, 191, 255, 0.5)',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {name.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants} style={{ fontSize: '3rem', fontWeight: 700, color: '#00bfff' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <Typography variant="h5" sx={{ color: 'text.secondary', letterSpacing: '0.1em' }}>
          {title}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <Button
          component={RouterLink}
          to="/projects"
          variant="outlined"
          size="large"
          sx={{
            marginTop: '3rem',
            color: 'primary.main',
            borderColor: 'primary.main',
            borderWidth: '2px',
            '&:hover': {
              backgroundColor: 'rgba(0, 191, 255, 0.1)',
              borderWidth: '2px',
            },
          }}
        >
          Load Project Schematics
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home; 