import { Grid, Typography } from "@mui/material";

export default function TransactionItemHeadingComponent() {
  return (
    <Grid container spacing={1} mb={1}>
      <Grid item xs={8}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Main transaction Item More text to dajsdaksdgajsdga sdsakdgakjdgadjkg
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          sx={{
            textAlign: "end",
            fontFamily: "Roboto",
            color: "#2e7d32",
          }}
        >
          ₹ 5,55,500
        </Typography>
      </Grid>
    </Grid>
  );
}
