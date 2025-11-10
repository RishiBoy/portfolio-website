import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Skills = () => {
  const { skills } = cvData;

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
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
            Technical Skills
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

          <Grid container spacing={3}>
            {skills.map((skillGroup, index) => (
              <Grid item xs={12} sm={6} md={4} key={skillGroup.category}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {skillGroup.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillGroup.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Skills;
