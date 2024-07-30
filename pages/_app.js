// pages/_app.js

import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from '../src/theme'
import { Global, css } from '@emotion/react';
import Navbar from "../components/Navbar"
import { styled } from '@mui/system';


//TODO zu einer komponente ausschachteln
// Gestylter Rahmen um das gesamte Fenster
const RetroFrame = styled(Box)({
  position: 'relative',
  zIndex: 2,
  backgroundColor: '#003366', // Hintergrundfarbe des Rahmens
  border: '8px solid #ffffff', // Weißer Rahmen
  borderTop: '4px solid #ffffff', // Rahmen oben
  borderBottom: '4px solid #ffffff', // Rahmen unten
  borderLeft: '4px solid #ffffff', // Rahmen links
  borderRight: '4px solid #ffffff', // Rahmen rechts
  padding: '16px', // Innenabstand, damit der Inhalt nicht direkt am Rand ist
  borderRadius: '8px', // Runde Ecken für den Rahmen
  margin: '0 auto', // Zentrierung des Rahmens
  maxWidth: '1200px', // Maximale Breite für den Rahmen
  minHeight: '100vh', // Volle Höhe des Viewports
  boxSizing: 'border-box', // Um sicherzustellen, dass Padding und Border im Box-Modell enthalten sind
  backgroundImage: "none",
});

const BackgroundWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  backgroundColor: '#001f3f',

  boxSizing: 'border-box',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    backgroundImage: 'url(/portfolio/media/images/sky2.jpg)', // Pfad zum Sternenmuster
    backgroundSize: '400px 400px',
    animation: 'float 30s linear infinite',
    opacity: 0.8,
  },
  '@keyframes float': {
    '0%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(50px, 50px)' },
    '100%': { transform: 'translate(0, 0)' },
  },
});





function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline sorgt für eine konsistente Basisstyling über alle Browser hinweg */}
      <CssBaseline />
      <Global 
        styles={css`
            body{
            background-color: ${theme.palette.primary.main};
            color: #FFFFFF;
        }
            `}
            />
      <BackgroundWrapper>
      <RetroFrame>
        <Navbar />
      <Component {...pageProps} />
      </RetroFrame>
      </BackgroundWrapper>
    </ThemeProvider>
   
 
  );
}

export default MyApp;
