// components/AnimatedImage.js
import React from 'react';
import { styled } from '@mui/system';

const ImageContainer = styled('div')({
  position: 'relative',
  width: '265px',  // Passe die Breite des Bildes an
  height: '300px', // Passe die Höhe des Bildes an
  overflow: 'hidden',
});

const Image = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  backgroundPosition: 'center',
});

const Image1 = styled(Image)({
  backgroundImage: 'url("/portfolio/media/images/pxNormal.jpg")',
});

const Image2 = styled(Image)(({ theme }) => ({
  backgroundImage: 'url("/portfolio/media/images/pxArt.png")',
  clipPath: 'inset(0 100% 0 0)', // Startzustand: vollständig abgeschnitten
  animation: 'reveal 5s infinite linear', // Animation auf 5 Sekunden gesetzt, anpassen nach Bedarf
  '@keyframes reveal': {
    '0%, 100%': {
      clipPath: 'inset(0 100% 0 0)', // Vollständig abgeschnitten
    },
    '50%': {
      clipPath: 'inset(0 0 0 0)', // Vollständig sichtbar
    },
  },
}));

const AnimatedImage = () => (
  <ImageContainer>
    <Image1 />
    <Image2 />
  </ImageContainer>
);

export default AnimatedImage;
