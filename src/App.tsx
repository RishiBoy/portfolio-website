import { useState, useMemo } from 'react';
import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import { lightTheme, darkTheme } from '@/theme/theme';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden', width: '100%' }}>
        <Layout darkMode={darkMode} onToggleTheme={toggleTheme}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;