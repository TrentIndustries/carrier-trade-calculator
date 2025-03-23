import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { cargoCapacity, totalAvailableCargo } from "../lib/state";

const CargoSettings = () => {
  const handleCargoCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    cargoCapacity.value = parseInt(ele.value, 10);
  };

  const handleTotalCargoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    totalAvailableCargo.value = parseInt(ele.value, 10);
  };

  return (
    <Grid container spacing={2} columns={{ sm: 1, md: 2 }}>
      <Grid size={1}>
        <TextField
          label="Cargo capacity"
          helperText="Cargo capacity of your ship"
          type="number"
          fullWidth
          value={cargoCapacity}
          onChange={handleCargoCapacityChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">tons</InputAdornment>,
            },
            htmlInput: {
              style: { textAlign: "right" },
            },
          }}
        />
      </Grid>
      <Grid size={1}>
        <TextField
          label="Available cargo"
          helperText="The total available cargo for this order"
          type="number"
          fullWidth
          value={totalAvailableCargo}
          onChange={handleTotalCargoChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">tons</InputAdornment>,
            },
            htmlInput: {
              style: { textAlign: "right" },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CargoSettings;
