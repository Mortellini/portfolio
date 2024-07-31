// pages/index.js

import React from 'react';
import Head from 'next/head';
import { Container, Typography, Box, Paper } from '@mui/material';
import theme from '@/src/theme';
import { styled } from '@mui/system';
import PixelArtBook from '@/components/PixelArtBook';
import { Global, css } from '@emotion/react';

// Styled Component für animierte Vokale
const AnimatedLetter = styled('span')(({ theme, delay }) => ({
  display: 'inline-block',
  animation: `jump 1.0s ${delay}s infinite`,
  '@keyframes jump': {
    '0%, 20%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  paddingBottom: '8px',
  border: '4px solid #ffffff',
  zIndex: 1, // Setzt das Overlay über den Inhalt
});

const Home = () => {
  const title = "Welcome to my Website";
  const vowels = 'AEIOUaeiouy';

  return (
    <>
      <Head>
        <title>Morten's Website</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            {title.split('').map((char, index) => {
              if (vowels.includes(char)) {
                return (
                  <AnimatedLetter key={index} delay={index * 0.1}>
                    {char}
                  </AnimatedLetter>
                );
              }
              return char;
            })}
          </Typography>
        </Box>
        <Box className="flex-box" sx={{ display: 'flex', flexDirection: "row" }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={9} sx={{ backgroundColor: theme.palette.primary.deep, color: theme.palette.secondary.main }}>
              <Typography variant="h5" component="p" sx={{ marginBottom: 4, padding: 2 }}>
               This is a website made with the use of next.js and Material UI... <br/><br/> I wanted to give this website a retro game flair like one of my favorite games Mega Man... <br/><br/> This is still one of my first solo projects and I will try to update it regularly and more projects are going to follow...

              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
  <PixelArtBook/>
</Box>

        </Box>

        <Box sx={{ position: 'relative', marginTop: 4 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Meine Projekte
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2, position: 'relative' }}>
            {/* Beispielprojekte */}
            <Box sx={{ padding: 2, border: '1px solid', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="h6" component="h3">
                Projekt 1
              </Typography>
              <Typography component="p" sx={{ marginTop: 2 }}>
                Beschreibung des Projekts. Dies könnte ein Link zu GitHub oder einer Live-Demo enthalten.
              </Typography>
            </Box>
            <Box sx={{ padding: 2, border: '1px solid', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="h6" component="h3">
                Projekt 2
              </Typography>
              <Typography component="p" sx={{ marginTop: 2 }}>
                Beschreibung des Projekts. Dies könnte ein Link zu GitHub oder einer Live-Demo enthalten.
              </Typography>
            </Box>
            <Box sx={{ padding: 2, border: '1px solid', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="h6" component="h3">
                Projekt 3
              </Typography>
              <Typography component="p" sx={{ marginTop: 2 }}>
                Beschreibung des Projekts. Dies könnte ein Link zu GitHub oder einer Live-Demo enthalten.
              </Typography>
            </Box>
          </Box>
          <Overlay>
            Area not unlocked yet <br/>
            Will be unlocked soon
          </Overlay>
        </Box>
      </Container>
    </>
  );
};

export default Home;
