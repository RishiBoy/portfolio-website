import { createTheme, ThemeOptions } from '@mui/material/styles';

// Color palette
const colors = {
  primary: {
    main: '#2196F3',
    light: '#64B5F6',
    dark: '#1976D2',
  },
  secondary: {
    main: '#00BCD4',
    light: '#4DD0E1',
    dark: '#0097A7',
  },
  accent: {
    main: '#FF4081',
    light: '#FF80AB',
    dark: '#F50057',
  },
  background: {
    light: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
    dark: {
      default: '#0A1929',
      paper: '#132F4C',
    },
  },
};

// Common theme options
const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.light.default,
      paper: colors.background.light.paper,
    },
    text: {
      primary: '#1A202C',
      secondary: '#4A5568',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.dark.default,
      paper: colors.background.dark.paper,
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#A0AEC0',
    },
  },
});
