import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface LoadTabProps {
  active: boolean;
}

const loadTab = (props: LoadTabProps) => {
  return (
    <div hidden={!props.active}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant='h4'>Loading</Typography>
        </Grid>
        <Grid size={6}>
          <TextField fullWidth type="number" label="Station buy price" />
        </Grid>
        <Grid size={6}>
          <TextField fullWidth type="number" label="Carrier sell price" />
        </Grid>
      </Grid>
    </div>
  );
};

export default loadTab;

