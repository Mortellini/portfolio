// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import RetroTitle from './RetroTitle';

// Gestylte Komponente für die Navbar mit Rahmen und Schatten
const RetroNavbar = styled(AppBar)({
  backgroundColor: '#0074D9', // Hauptblau
  border: '4px solid #ffffff', // Weißer äußerer Rand
  borderRadius: '8px', // Runde Ecken, um den Retro-Look zu verstärken
  padding: '8px', // Innenabstand
  boxShadow: '0 0 10px #000000', // Leichter Schatten für den 3D-Effekt
  position: 'relative', // Für absolute Positionierung der inneren Elemente
});

const InnerBorder = styled(Box)({
  border: '2px solid #000000', // Schwarzer innerer Rand
  borderRadius: '4px',
  padding: '4px',
  backgroundColor: '#003366', // Dunklerer Blauton für Tiefe
});

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', backgroundColor: '#003366', height: '100%', color: '#ffffff', border: '4px solid #ffffff' }}>
      <List>
        <Link href="/" passHref>
          <ListItem button>
            <ListItemText primary="Home" sx={{ color: '#ffffff', textAlign: 'center' }} />
          </ListItem>
        </Link>
        <Link href="/about" passHref>
          <ListItem button>
            <ListItemText primary="About" sx={{ color: '#ffffff', textAlign: 'center' }} />
          </ListItem>
        </Link>
        <Link href="/projects" passHref>
          <ListItem button>
            <ListItemText primary="Projekte" sx={{ color: '#ffffff', textAlign: 'center' }} />
          </ListItem>
        </Link>
        <Link href="/contact" passHref>
          <ListItem button>
            <ListItemText primary="Kontakt" sx={{ color: '#ffffff', textAlign: 'center' }} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <RetroNavbar position="static">
        <InnerBorder>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <RetroTitle sx={{ flexGrow: 1 }}>Retro Portfolio</RetroTitle>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              <Link href="/" passHref>
                <Button color="inherit">
                  <RetroTitle>Home</RetroTitle>
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button color="inherit">
                  <RetroTitle>About</RetroTitle>
                </Button>
              </Link>
              <Link href="/projects" passHref>
                <Button color="inherit">
                  <RetroTitle>Projekte</RetroTitle>
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button color="inherit">
                  <RetroTitle>Kontakt</RetroTitle>
                </Button>
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </InnerBorder>
      </RetroNavbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
