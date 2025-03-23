import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { buyPrice, OperationType, sellPrice } from "../lib/state";

interface LoadTabProps {
  active: boolean;
  type: OperationType;
}

const labels: {
  [key in OperationType]: {
    tabTitle: string;
    buyLabel: string;
    buyHelperText: string;
    sellLabel: string;
    sellHelperText: string;
  };
} = {
  [OperationType.Load]: {
    tabTitle: "Loading",
    buyLabel: "Station buy price",
    buyHelperText: "The price you pay when buying the commodity",
    sellLabel: "Carrier sell price",
    sellHelperText: "The price for which you sell the commodity",
  },
  [OperationType.Unload]: {
    tabTitle: "Unloading",
    buyLabel: "Carrier buy price",
    buyHelperText: "The price you pay when buying the commodity",
    sellLabel: "Station sell price",
    sellHelperText: "The price for which you sell the commodity",
  },
};

const operationTab = (props: LoadTabProps) => {
  const handleBuyPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    buyPrice.value = parseFloat(ele.value);
  };

  const handleSellPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ele = event.target as HTMLInputElement;
    sellPrice.value = parseFloat(ele.value);
  };

  return (
    <div hidden={!props.active}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">{labels[props.type].tabTitle}</Typography>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            type="number"
            helperText={labels[props.type].buyHelperText}
            label={labels[props.type].buyLabel}
            value={buyPrice}
            onChange={handleBuyPriceChange}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">Cr</InputAdornment>,
              },
              htmlInput: {
                style: { textAlign: "right" },
              },
            }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            type="number"
            helperText={labels[props.type].sellHelperText}
            label={labels[props.type].sellLabel}
            value={sellPrice}
            onChange={handleSellPriceChange}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">Cr</InputAdornment>,
              },
              htmlInput: {
                style: { textAlign: "right" },
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default operationTab;
