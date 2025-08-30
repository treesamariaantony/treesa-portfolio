import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { to: '/', icon: <HomeIcon />, label: 'Home' },
  { to: '/about', icon: <PersonIcon />, label: 'About' },
  { to: '/experience', icon: <WorkIcon />, label: 'Experience' },
  { to: '/projects', icon: <CodeIcon />, label: 'Projects' },
  { to: '/skills', icon: <BuildIcon />, label: 'Skills' },
  { to: '/contact', icon: <EmailIcon />, label: 'Contact' },
];

const Sidebar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#00bfff' : '#8892b0', // Deep Sky Blue for active, Slate for inactive
    transition: 'color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '16px 0',
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '80px',
        backgroundColor: '#0a192f', // Dark Navy background
        borderRight: '1px solid #1a2b47', // Slightly lighter border
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        zIndex: 10
      }}
    >
      {navItems.map((item) => (
        <Tooltip title={item.label} placement="right" key={item.to}>
          <NavLink to={item.to} style={navLinkStyles}>
            <IconButton color="inherit">
              {item.icon}
            </IconButton>
          </NavLink>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Sidebar;
