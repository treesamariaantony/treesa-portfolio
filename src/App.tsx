import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Sidebar from './components/Sidebar.tsx';

// A professional, blueprint-inspired theme
const blueprintTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bfff', // Deep Sky Blue - a classic blueprint accent
    },
    secondary: {
      main: '#ffae42', // Amber - for secondary accents
    },
    background: {
      default: '#0d1117', // Very dark grey, like GitHub's dark mode
      paper: '#0a192f',   // Dark Navy, for cards and surfaces
    },
    text: {
      primary: '#c9d1d9', // Light grey for primary text
      secondary: '#8892b0', // Slate grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Courier New", monospace',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#00bfff',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#00bfff',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
});

function App() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <ThemeProvider theme={blueprintTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pl: '80px', // Pushes content to the right of the sidebar
              width: 'calc(100% - 80px)', // Ensures main content takes up remaining space
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience activeSkill={activeSkill} />} />
              <Route path="/projects" element={<Projects activeSkill={activeSkill} />} />
              <Route path="/skills" element={<Skills setActiveSkill={setActiveSkill} activeSkill={activeSkill} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 