// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
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
  return (
    <RetroNavbar position="static">
      <InnerBorder>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <RetroTitle sx={{ flexGrow: 1}} >
            Retro Portfolio
          </RetroTitle>
          <Box sx={{ display: 'flex', gap: "2"}}>
          <Link href="/" passHref>
            <Button color="inherit"><RetroTitle >Home</RetroTitle></Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit"><RetroTitle >About</RetroTitle></Button>
          </Link>
          <Link href="/projects" passHref>
            <Button color="inherit"><RetroTitle >Projekte</RetroTitle></Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit"><RetroTitle >Kontakt</RetroTitle></Button>
          </Link>
          </Box>
        </Toolbar>
      </InnerBorder>
    </RetroNavbar>
  );
}

export default Navbar;
