// pages/Projects.js
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';


const PongContainer = styled(Box)({
  position: 'relative',
  width: '800px',
  height: '400px',
  border: '2px solid #fff',
  backgroundColor: '#000',
  margin: '0 auto', // zentriert die Box auf der Seite
});

const PongPaddle = styled(Box)({
  position: 'absolute',
  width: '20px',
  height: '100px',
  backgroundColor: '#fff',
  animation: 'movePaddle 4s ease-in-out infinite',
});

const PongPaddleLeft = styled(PongPaddle)({
  left: 0,
  animationDelay: '0s',
});

const PongPaddleRight = styled(PongPaddle)({
  right: 0,
  animationDelay: '2s',
});

const PongBall = styled(Box)({
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  animation: 'moveBall 6s linear infinite',
  '@keyframes moveBall': {
    '0%': { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
    '10%': { left: '95%', top: '30%', transform: 'translate(-50%, -50%)' },
    '20%': { left: '50%', top: '70%', transform: 'translate(-50%, -50%)' },
    '30%': { left: '5%', top: '85%', transform: 'translate(-50%, -50%)' },
    '40%': { left: '50%', top: '15%', transform: 'translate(-50%, -50%)' },
    '50%': { left: '95%', top: '50%', transform: 'translate(-50%, -50%)' },
    '60%': { left: '50%', top: '20%', transform: 'translate(-50%, -50%)' },
    '70%': { left: '5%', top: '75%', transform: 'translate(-50%, -50%)' },
    '80%': { left: '50%', top: '40%', transform: 'translate(-50%, -50%)' },
    '90%': { left: '95%', top: '10%', transform: 'translate(-50%, -50%)' },
    '100%': { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
  },
  '@keyframes movePaddle': {
    '0%': { top: 'calc(50% - 50px)' },
    '25%': { top: 'calc(20% - 50px)' },
    '50%': { top: 'calc(50% - 50px)' },
    '75%': { top: 'calc(80% - 50px)' },
    '100%': { top: 'calc(50% - 50px)' },
  },
});

function Projects() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
        <Typography variant='h2' component="h1">Projects Page</Typography>
        <Typography>This is where the projects will be listed. For now, enjoy a simple (still flawed) Pong animation!</Typography>
      </Box>

      <PongContainer>
        <PongPaddleLeft />
        <PongBall />
        <PongPaddleRight />
      </PongContainer>
    
    </Container>
  );
}

export default Projects;
