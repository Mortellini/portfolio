// pages/Contact.js
import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../src/theme'

// Stil für den Button
const StyledButton = styled(Button)({
  backgroundColor: '#232649', // Primärfarbe für den Hintergrund
  color: '#ffffff', // Weiße Textfarbe
  '&:hover': {
    backgroundColor: '#1a1c3a', // Dunklere Primärfarbe für Hover-Effekt
  },
});

// Stil für Textfelder
const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ffffff', // Weißer Labeltext bei Fokus
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffffff', // Weißer Unterstrich bei Fokus
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff', // Weißer Rand
    },
    '&:hover fieldset': {
      borderColor: '#ffffff', // Weißer Rand beim Hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff', // Weißer Rand bei Fokus
    },
  },
  '& .MuiInputBase-input': {
    color: '#ffffff', // Weißer Text innerhalb des Inputs
  },
});

function Contact() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" component="p">
          I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to get in touch.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" component="p">
          Email: <a href="mailto:mortitorti305@gmail.com">mortitorti305@gmail.com</a><br />
         
          Location: Hamburg, Germany
        </Typography>
      </Box>

      <Box component="form" sx={{ marginTop: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Send a Message
        </Typography>
        <StyledTextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <StyledTextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <StyledTextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <StyledButton variant="contained" sx={{ marginTop: '20px' }}>
          Send
        </StyledButton>
      </Box>
      <Typography sx={{color: theme.palette.secondary.main}}>This form is not functional yet!</Typography>
    </Container>
  );
}

export default Contact;
