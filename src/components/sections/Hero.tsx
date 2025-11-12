import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, LinkedIn, Email } from '@mui/icons-material';
import { cvData } from '@/data/cvData';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Hero = () => {
  const { name, title, tagline, contact } = cvData.personalInfo;
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(tagline.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, tagline]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        overflowX: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0A1929 0%, #132F4C 100%)'
            : 'linear-gradient(135deg, #F5F7FA 0%, #E3F2FD 100%)',
      }}
    >
      {/* Animated background particles */}
      <MotionBox
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
          opacity: 0.1,
          filter: 'blur(80px)',
        }}
      />

      <MotionBox
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '0%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FF4081 30%, #2196F3 90%)',
          opacity: 0.1,
          filter: 'blur(100px)',
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          sx={{
            position: 'absolute',
            width: { xs: 15 + i * 5, md: 20 + i * 10 },
            height: { xs: 15 + i * 5, md: 20 + i * 10 },
            borderRadius: i % 2 === 0 ? '50%' : '20%',
            background: `linear-gradient(45deg, ${i % 2 === 0 ? '#2196F3' : '#00BCD4'} 30%, ${i % 2 === 0 ? '#00BCD4' : '#2196F3'} 90%)`,
            opacity: 0.15,
            top: `${10 + i * 15}%`,
            left: `${5 + i * 15}%`,
            display: { xs: i > 3 ? 'none' : 'block', md: 'block' },
          }}
        />
      ))}

      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          {/* Greeting with slide in animation */}
          <MotionTypography
            variant="body1"
            color="primary"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
            variants={itemVariants}
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            👋 Hello, I'm
          </MotionTypography>

          {/* Name with gradient and scale animation */}
          <MotionTypography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 60%, #FF4081 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              '@keyframes gradient': {
                '0%, 100%': {
                  backgroundPosition: '0% center',
                },
                '50%': {
                  backgroundPosition: '100% center',
                },
              },
            }}
            variants={itemVariants}
          >
            {name}
          </MotionTypography>

          {/* Title with bounce effect */}
          <MotionTypography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              color: 'text.primary',
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </MotionTypography>

          {/* Tagline with typing effect */}
          <MotionBox
            variants={itemVariants}
            sx={{ mb: 4 }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                minHeight: '3.6em',
              }}
            >
              {displayedText}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.2em',
                  backgroundColor: 'primary.main',
                  ml: 0.5,
                  animation: 'blink 1s infinite',
                  '@keyframes blink': {
                    '0%, 50%': { opacity: 1 },
                    '51%, 100%': { opacity: 0 },
                  },
                }}
              />
            </Typography>
          </MotionBox>

          {/* Buttons with hover animations */}
          <MotionBox variants={itemVariants}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <MotionBox
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
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
                      boxShadow: '0 10px 30px rgba(33, 150, 243, 0.4)',
                    },
                  }}
                  href="/cv.pdf"
                  download
                >
                  Download CV
                </Button>
              </MotionBox>

              <MotionBox
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedIn />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#2196F3',
                      backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    }
                  }}
                  href={`https://${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </MotionBox>

              <MotionBox
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#00BCD4',
                      backgroundColor: 'rgba(0, 188, 212, 0.1)',
                    }
                  }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </Button>
              </MotionBox>
            </Stack>
          </MotionBox>

          {/* Scroll indicator */}
          <MotionBox
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              mt: 8,
              cursor: 'pointer',
            }}
            onClick={() => {
              const element = document.querySelector('#about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
              Scroll to explore
            </Typography>
            <Box
              sx={{
                width: 24,
                height: 40,
                border: 2,
                borderColor: 'primary.main',
                borderRadius: 12,
                position: 'relative',
              }}
            >
              <MotionBox
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  width: 4,
                  height: 8,
                  backgroundColor: 'primary.main',
                  borderRadius: 2,
                  position: 'absolute',
                  left: '50%',
                  top: 6,
                  transform: 'translateX(-50%)',
                }}
              />
            </Box>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;