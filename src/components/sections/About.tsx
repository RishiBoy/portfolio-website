import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code,
  Cloud,
  Psychology,
  Groups,
} from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const highlights = [
  {
    icon: <Code fontSize="large" />,
    title: 'Full-Stack Development',
    description: '2+ years building scalable web applications with React, TypeScript, and Node.js',
  },
  {
    icon: <Cloud fontSize="large" />,
    title: 'Cloud & Azure',
    description: 'Extensive experience with Azure services, serverless architecture, and real-time systems',
  },
  {
    icon: <Psychology fontSize="large" />,
    title: 'AI Agent Development',
    description: 'Building and optimizing AI agents using Azure AI Foundry for multi-agent orchestration',
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Team Leadership',
    description: 'Led frontend engineering teams and collaborative projects at VC-backed startup',
  },
];

const About = () => {
  const { summary } = cvData.personalInfo;

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
              margin: '0 auto',
              mb: 6,
            }}
          />

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              margin: '0 auto',
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            {summary}
          </Typography>

          <Grid container spacing={3}>
            {highlights.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;
