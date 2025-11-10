import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, LinkedIn, Download } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Contact = () => {
  const { contact } = cvData.personalInfo;
  const { references } = cvData;

  const contactItems = [
    {
      icon: <Email fontSize="large" />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone fontSize="large" />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <LocationOn fontSize="large" />,
      label: 'Location',
      value: contact.location,
      href: null,
    },
    {
      icon: <LinkedIn fontSize="large" />,
      label: 'LinkedIn',
      value: contact.linkedin,
      href: `https://${contact.linkedin}`,
    },
  ];

  return (
    <Box
      id="contact"
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
            Get In Touch
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
              maxWidth: 600,
              margin: '0 auto',
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            Feel free to reach out!
          </Typography>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {contactItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.label}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
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
                      {item.label}
                    </Typography>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main',
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        <Typography variant="body2">{item.value}</Typography>
                      </Link>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {item.value}
                      </Typography>
                    )}
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* CTA Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            sx={{
              textAlign: 'center',
              mb: 6,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #2196F3 30%, #00BCD4 90%)',
                boxShadow: '0 3px 15px rgba(33, 150, 243, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                },
              }}
              href="/cv.pdf"
              download
            >
              Download Full CV
            </Button>
          </MotionBox>

          {/* References Section */}
          {references.length > 0 && (
            <Box sx={{ mt: 8 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                References
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                {references.map((ref, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      sx={{
                        borderRadius: 3,
                        boxShadow: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {ref.name}
                        </Typography>
                        <Typography variant="body1" color="primary" sx={{ mb: 1 }}>
                          {ref.position} @ {ref.company}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Link
                            href={`mailto:${ref.email}`}
                            sx={{
                              color: 'text.secondary',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'primary.main',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <Typography variant="body2">{ref.email}</Typography>
                          </Link>
                          {ref.linkedin && (
                            <Link
                              href={`https://${ref.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'text.secondary',
                                textDecoration: 'none',
                                '&:hover': {
                                  color: 'primary.main',
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              <Typography variant="body2">{ref.linkedin}</Typography>
                            </Link>
                          )}
                        </Box>
                      </CardContent>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Contact;
