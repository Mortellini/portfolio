import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';

const colors = ['#FFFFFF', '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];

const Pixel = ({ color, onClick }) => {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        border: '1px solid #ddd',
        backgroundColor: color,
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

const PixelArtBoard = ({ rows, cols }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [pixels, setPixels] = useState(Array(rows * cols).fill('#FFFFFF'));

  const handlePixelClick = (index) => {
    const newPixels = pixels.slice();
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  const resetPixels = () => {
    setPixels(Array(rows * cols).fill('#FFFFFF'));
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        {colors.map((color, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              sx={{ backgroundColor: color, minWidth: 36, height: 36 }}
              onClick={() => setSelectedColor(color)}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 20px)`, marginTop: 4 }}>
        {pixels.map((color, index) => (
          <Pixel key={index} color={color} onClick={() => handlePixelClick(index)} />
        ))}
      </Box>
      <Button variant="contained" onClick={resetPixels} sx={{ marginTop: 4 }}>
        Reset
      </Button>
    </Box>
  );
};

const PixelArtBook = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1>Pixel Art Drawing</h1>
      <PixelArtBoard rows={16} cols={16} />
    </Box>
  );
};

export default PixelArtBook;
