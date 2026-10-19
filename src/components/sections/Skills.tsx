import { Box, Container, Typography, Grid, Chip, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';
import { getSkillIcon, categoryIcons } from '@/utils/skillIcons';

// Lighten dark brand colours so the logos stay visible on the dark theme.
const forTheme = (hex: string, isDark: boolean): string => {
  if (!isDark) return hex;
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance > 0.45) return hex;
  const mix = (c: number) => Math.round(c + (255 - c) * 0.5);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
};

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Skills = () => {
  const { skills } = cvData;
  const theme = useTheme();

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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    {(() => {
                      const CategoryIcon = categoryIcons[skillGroup.category];
                      return <CategoryIcon size={26} color={theme.palette.primary.main} aria-hidden />;
                    })()}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: 'primary.main' }}
                    >
                      {skillGroup.category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillGroup.skills.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <Chip
                          key={skill}
                          label={skill}
                          icon={
                            <Icon
                              size={16}
                              color={color ? forTheme(color, theme.palette.mode === 'dark') : theme.palette.text.primary}
                              aria-hidden
                            />
                          }
                          variant="outlined"
                          sx={{
                            height: 32,
                            pl: 0.75,
                            color: 'text.primary',
                            backgroundColor: 'action.hover',
                            borderColor: 'divider',
                            fontWeight: 500,
                            transition: 'all 0.2s ease',
                            '& .MuiChip-icon': { ml: 0.5, mr: -0.25 },
                            '&:hover': {
                              borderColor: 'primary.main',
                              backgroundColor: 'action.selected',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        />
                      );
                    })}
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
