import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { loadBuyPrice, loadSellPrice } from "../lib/state";

interface LoadTabProps {
  active: boolean;
}

const loadTab = (props: LoadTabProps) => {
  const handleBuyPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    loadBuyPrice.value = parseFloat(ele.value);
  };

  const handleSellPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    loadSellPrice.value = parseFloat(ele.value);
  };

  return (
    <div hidden={!props.active}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant='h4'>Loading</Typography>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            type="number"
            helperText="The price you pay when buying the commodity"
            label="Station buy price"
            value={loadBuyPrice}
            onChange={handleBuyPriceChange}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position='end'>Cr</InputAdornment>
              },
              htmlInput: {
                style: { textAlign: "right"},
              }
            }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            type="number"
            helperText="The price for which you sell the commodity"
            label="Carrier sell price"
            value={loadSellPrice}
            onChange={handleSellPriceChange}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position='end'>Cr</InputAdornment>
              },
              htmlInput: {
                style: { textAlign: "right"},
              }
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default loadTab;

