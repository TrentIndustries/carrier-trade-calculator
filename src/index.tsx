import { render } from 'preact';
import { useState } from 'preact/hooks';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import LoadTab from './components/LoadTab';
import UnloadTab from './components/UnloadTab';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#d95d07",
      light: "#ff8a50",
      dark: "#ac4b07",
      contrastText: "#000",
    }
  },
  shape: {
    borderRadius: 0,
  },
});


export function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_ev: Event, index: number) => {
    setActiveTab(index);
  };

	return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ paddingTop: '1rem' }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent>
                <TextField label="Cargo capacity" />
                <Box sx={{ borderBottom: 2, borderColor: 'divider', marginY: 2 }}>
                  <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab label="Loading" />
                    <Tab label="Unloading" />
                  </Tabs>
                </Box>

                <LoadTab active={activeTab == 0} />
                <UnloadTab active={activeTab == 1} />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardHeader title="Results" />
              <CardContent>
                <Grid container spacing={2}>
                  <TextField fullWidth label="Profit per ton" />
                  <TextField fullWidth label="Profit per trip" />
                  <TextField fullWidth label="Total profit" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
