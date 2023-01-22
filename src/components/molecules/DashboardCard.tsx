import { Card, Skeleton, Box, CardContent } from "@mui/material";

export default function DashboardCardComponent() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={150} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={100} />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Skeleton variant="text" sx={{ fontSize: "4rem" }} width={"50%"} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={200} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={100} />
        </Box>
      </CardContent>
      {/* <Skeleton variant="rectangular" height={200} /> */}
    </Card>
  );
}
