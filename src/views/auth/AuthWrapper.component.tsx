import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { AccountCircle, Home } from "@mui/icons-material";

export default function AuthWrapperComponent() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (ele: any) => {
    navigate(ele);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "3rem",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Home></Home>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </AppBar>
      </Box>
      <Box mt={"4rem"} mb={"3rem"}>
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "3rem",
        }}
        elevation={3}
      >
        <BottomNavigation>
          <BottomNavigationAction
            onClick={() => handleClick("/dashboard")}
            label="Recents"
            icon={<DashboardCustomizeOutlinedIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleClick("/transactions")}
            label="Favorites"
            icon={<ReceiptLongOutlinedIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleClick("/dashboard")}
            label="Nearby"
            icon={<LockPersonOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
