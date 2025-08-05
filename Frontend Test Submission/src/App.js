import React from 'react';
import { Container, Typography } from '@mui/material';
import ShortenerForm from './components/ShortenerForm';
import URLList from './components/URLList';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        React URL Shortener
      </Typography>
      <ShortenerForm />
      <URLList />
      <StatisticsPage />
    </Container>
  );
}

export default App;
