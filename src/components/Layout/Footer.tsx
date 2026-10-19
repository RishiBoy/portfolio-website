import { Box, Container, Typography, Link, IconButton, Tooltip } from '@mui/material';
import { LinkedIn, Email, Phone } from '@mui/icons-material';
import { cvData } from '@/data/cvData';

const Footer = () => {
  const { contact } = cvData.personalInfo;

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Rishitha Fernando. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="LinkedIn profile" arrow>
              <IconButton
                component={Link}
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                color="primary"
                size="small"
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
            <Tooltip title={`Email ${contact.email}`} arrow>
              <IconButton
                component={Link}
                href={`mailto:${contact.email}`}
                aria-label={`Email ${contact.email}`}
                color="primary"
                size="small"
              >
                <Email />
              </IconButton>
            </Tooltip>
            <Tooltip title={`Call ${contact.phone}`} arrow>
              <IconButton
                component={Link}
                href={`tel:${contact.phone}`}
                aria-label={`Call ${contact.phone}`}
                color="primary"
                size="small"
              >
                <Phone />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
