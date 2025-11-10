import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, LinkedIn, Email } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Hero = () => {
  const { name, title, tagline, contact } = cvData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
          opacity: 0.1,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FF4081 30%, #2196F3 90%)',
          opacity: 0.1,
          filter: 'blur(80px)',
        }}
      />

      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          <MotionTypography
            variant="body1"
            color="primary"
            sx={{ fontWeight: 600, mb: 2 }}
            variants={itemVariants}
          >
            Hello, I'm
          </MotionTypography>

          <MotionTypography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            variants={itemVariants}
          >
            {name}
          </MotionTypography>

          <MotionTypography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
            variants={itemVariants}
          >
            {title}
          </MotionTypography>

          <MotionTypography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mb: 4,
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}
            variants={itemVariants}
          >
            {tagline}
          </MotionTypography>

          <MotionBox variants={itemVariants}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
                  boxShadow: '0 3px 15px rgba(33, 150, 243, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                  },
                }}
                href="/cv.pdf"
                download
              >
                Download CV
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedIn />}
                sx={{ px: 4, py: 1.5 }}
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                sx={{ px: 4, py: 1.5 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;
