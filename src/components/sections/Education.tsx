import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { School, CalendarToday, LocationOn, EmojiEvents } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Education = () => {
  const { education } = cvData;

  return (
    <Box
      id="education"
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
            Education
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
            {education.map((edu, index) => (
              <Grid item xs={12} md={4} key={edu.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <School fontSize="large" />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        textAlign: 'center',
                      }}
                    >
                      {edu.degree}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{
                        fontWeight: 500,
                        mb: 2,
                        textAlign: 'center',
                      }}
                    >
                      {edu.institution}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarToday fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {edu.graduationDate}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {edu.location}
                        </Typography>
                      </Box>
                      {edu.classification && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <EmojiEvents fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            {edu.classification}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {edu.field && (
                      <Box
                        sx={{
                          mt: 2,
                          pt: 2,
                          borderTop: 1,
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ textAlign: 'center' }}
                        >
                          Field: {edu.field}
                        </Typography>
                      </Box>
                    )}
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

export default Education;
