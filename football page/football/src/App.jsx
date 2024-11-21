import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { theme } from './theme'; // Your theme configuration
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
