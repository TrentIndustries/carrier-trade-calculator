import { render } from "preact";
import { useState } from "preact/hooks";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import CargoSettings from "./components/CargoSettings";
import OperationTab from "./components/OperationTab";

import {
  cargoCapacity,
  buyPrice,
  sellPrice,
  totalAvailableCargo,
  OperationType,
  operationType,
} from "./lib/state";
import { Button, Snackbar, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d95d07",
      light: "#ff8a50",
      dark: "#ac4b07",
      contrastText: "#000",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export function App() {
  const [activeTab, setActiveTab] = useState(operationType.peek());
  const [showCopySnack, setShowCopySnack] = useState(false);

  const formatter = new Intl.NumberFormat("en-US");

  const profitPerTon = sellPrice.value - buyPrice.value;
  const profitPerTonFormatted = formatter.format(profitPerTon);
  const profitPerTrip = formatter.format(profitPerTon * cargoCapacity.value);
  const totalProfit = formatter.format(profitPerTon * totalAvailableCargo.value);

  const handleTabChange = (_ev: Event, index: number) => {
    setActiveTab(index);
    operationType.value = index;
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowCopySnack(true);
  };

  const handleCloseCopySnack = () => {
    setShowCopySnack(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ paddingTop: "1rem" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent>
                <CargoSettings />
                <Box sx={{ borderBottom: 2, borderColor: "divider", marginY: 2 }}>
                  <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab label="Loading" />
                    <Tab label="Unloading" />
                  </Tabs>
                </Box>

                <OperationTab active={activeTab == 0} type={OperationType.Load} />
                <OperationTab active={activeTab == 1} type={OperationType.Unload} />
                <Grid
                  container
                  size={12}
                  direction="column"
                  gap={2}
                  alignContent="center"
                  alignItems="center"
                  sx={{ marginTop: 4 }}
                >
                  <Button variant="contained" onClick={handleCopyLink}>
                    Share operation
                  </Button>
                  <Typography variant="caption">
                    Copy a link that includes prices and available cargo
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardHeader title="Results" />
              <CardContent>
                <Grid container spacing={2}>
                  <TextField
                    fullWidth
                    label="Profit per ton"
                    value={profitPerTonFormatted}
                    slotProps={{
                      input: {
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">Cr</InputAdornment>,
                      },
                      htmlInput: {
                        style: { textAlign: "right" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Profit per trip"
                    value={profitPerTrip}
                    slotProps={{
                      input: {
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">Cr</InputAdornment>,
                      },
                      htmlInput: {
                        style: { textAlign: "right" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Total profit"
                    value={totalProfit}
                    slotProps={{
                      input: {
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">Cr</InputAdornment>,
                      },
                      htmlInput: {
                        style: { textAlign: "right" },
                      },
                    }}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Snackbar
          open={showCopySnack}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleCloseCopySnack}
        >
          <Alert
            onClose={handleCloseCopySnack}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Link copied
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById("app"));
