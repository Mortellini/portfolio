// pages/about.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import RetroTitle from '../components/RetroTitle';

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
};

const rubyStyle = {
  width: '24px',
  height: '24px',
  marginRight: '8px',
};

const sectionBoxStyle = {
  marginBottom: '40px', // Konsistente Abstände zwischen den Abschnitten
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const sectionTitleStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
};

function About() {
  const rubyIcon = "/portfolio/media/images/ruby.png"; // Sicherstellen, dass der Pfad korrekt ist
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
        <Typography variant="h2" component="h1">About Me</Typography>
      </Box>

      <Box sx={sectionBoxStyle}>
        <Typography component="h3" variant="h5" style={sectionTitleStyle}>
          Introduction
        </Typography>
        <Typography paragraph sx={{paddingLeft: "8px"}}>
          Hello! I'm Morten, a passionate frontend developer with a focus on creating beautiful and functional user experiences. I am currently a Computer Science student at the university of applied science Hamburg (HAW).
          My next goal is to write my bachelor thesis. <br /> <br />
          My biggest interest right now are the Stormlight Archives Novels by Brandon Sanderson, currently reading Words of Radiance. <br />
          Also, I am trying to improve my coding skills and achieve a healthier lifestyle.
        </Typography>
      </Box>

      <Box sx={sectionBoxStyle}>
        <Typography component="h3" variant="h5" style={sectionTitleStyle}>
          Technical Skills
        </Typography>
        <Typography paragraph sx={{paddingLeft: "8px"}}>
          I specialize in:
          <ul style={listStyle}>
            <li style={listItemStyle}><img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} /> Frontend Development: React, Next.js, Material-UI, JavaScript </li>
            <li style={listItemStyle}><img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} /> Backend Development: Java, Python</li>
            <li style={listItemStyle}><img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} /> Tools & Technologies: Git, Docker, Selenium</li>
          </ul>
        </Typography>
      </Box>

      <Box sx={sectionBoxStyle}>
        <Typography component="h3" variant="h5" style={sectionTitleStyle}>
          Personal Interests
        </Typography>
        <Typography component="div" sx={{paddingLeft: "8px"}}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} />
              Video Games, Shows and Anime
            </li>
            <li style={listItemStyle}>
              <img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} />
              Cycling, Basketball, Bowling
            </li>
            <li style={listItemStyle}>
              <img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} />
              Fantasy Novels and Manga
            </li>
            <li style={listItemStyle}>
              <img src={rubyIcon} alt="Ruby Icon" style={rubyStyle} />
              Cooking and experimenting with new recipes
            </li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
