import { Box, Stack, Typography } from "@mui/material";
import ButtonEMComponent from "../../components/atoms/ButtonEM";
import DashboardCardComponent from "../../components/molecules/DashboardCard";

export default function DashboardComponent() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Stack spacing={2}>
        <DashboardCardComponent></DashboardCardComponent>
        <DashboardCardComponent></DashboardCardComponent>
        <DashboardCardComponent></DashboardCardComponent>
        <DashboardCardComponent></DashboardCardComponent>
        <DashboardCardComponent></DashboardCardComponent>
      </Stack>
    </Box>
  );
}
