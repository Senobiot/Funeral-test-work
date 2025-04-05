import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './layouts';
import { fetchAuth, initialLoad } from './services/api-service';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

const App: React.FC = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchAuth("senobiot");
        await initialLoad();
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
