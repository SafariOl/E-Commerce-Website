'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import CopyrightBlock from './components/CopyrightBlock';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import './styles/style.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth={'xl'} sx={{ pl: 0, pr: 0 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateRows: "minmax(56px, 64px) 1fr 360px",
                minHeight: '100vh'
              }}
            >
              <Header />
              <Box component="main">
                {children}
              </Box>
              <footer>
                <Footer />
                <CopyrightBlock />
              </footer>
            </Box>
          </Container>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
