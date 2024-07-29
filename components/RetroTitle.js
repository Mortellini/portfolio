// components/RetroTitle.js
import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const RetroTitle = styled(Typography)({
  fontFamily: '"Press Start 2P", cursive',
  color: '#ffffff',
  textAlign: 'left', // Optional: Zentriert den Text
  margin: '10px 0', // Optional: Abstand nach oben und unten
});

export default RetroTitle;
