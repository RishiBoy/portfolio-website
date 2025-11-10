import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Experience = () => {
  const { experience } = cvData;

  return (
    <Box
      id="experience"
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
            Work Experience
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

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                transform: { md: 'translateX(-50%)' },
                width: '2px',
                height: '100%',
                backgroundColor: 'primary.main',
                opacity: 0.3,
                display: { xs: 'none', sm: 'block' },
              }}
            />

            {experience.map((exp, index) => (
              <MotionCard
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  mb: 4,
                  position: 'relative',
                  borderRadius: 3,
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '-30px', md: '50%' },
                    top: '30px',
                    transform: { md: 'translateX(-50%)' },
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: exp.current ? 'primary.main' : 'grey.400',
                    border: '3px solid',
                    borderColor: 'background.paper',
                    zIndex: 1,
                    display: { xs: 'none', sm: 'block' },
                  }}
                />

                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { md: 'flex-start' },
                      mb: 2,
                      gap: 2,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {exp.position}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        {exp.company}
                      </Typography>
                      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            {exp.startDate} - {exp.endDate}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOn fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            {exp.location}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                    {exp.current && (
                      <Chip
                        label="Current"
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    )}
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7 }}
                  >
                    {exp.description}
                  </Typography>

                  {exp.responsibilities.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Key Contributions:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {exp.responsibilities.slice(0, 4).map((resp, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5, lineHeight: 1.6 }}
                          >
                            {resp}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}

                  {exp.technologies.length > 0 && (
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {exp.clients && exp.clients.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Clients:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.clients.join(', ')}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </MotionCard>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Experience;
