import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MailIcon from "@mui/icons-material/Mail";
import { deepOrange, deepPurple, green, teal } from "@mui/material/colors";

import {
  Avatar,
  AvatarGroup,
  Badge,
  Chip,
  Grid,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CreateTransaction from "../../components/molecules/CreateTransaction";

export default function TransactionsEPComponent() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <h2>Transactions Component</h2>
      <CreateTransaction />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", paddingX: 0 }}
        subheader={
          <ListSubheader sx={{ paddingX: 0, fontSize: 16, fontWeight: "bold" }}>
            Today
          </ListSubheader>
        }
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
      <List
        sx={{ width: "100%", bgcolor: "background.paper", paddingX: 0 }}
        subheader={
          <ListSubheader sx={{ paddingX: 0 }}>Yesterday</ListSubheader>
        }
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
    </>
  );
}

function Item() {
  return (
    <ListItem sx={{ paddingX: 0 }}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: teal[500] }} alt="Remy Sharp" src="/hdfc.png" />
      </ListItemAvatar>

      <ListItemText
        id="switch-list-label-wifi"
        primary={<PrimaryHeading />}
        secondary={<Tags />}
      />
    </ListItem>
  );
}

function PrimaryHeading() {
  return (
    <Grid container spacing={1} mb={2}>
      <Grid item xs={8}>
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Main transaction Item More text to
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          sx={{
            textAlign: "end",
            fontSize: "1.1rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "#2e7d32",
          }}
        >
          ₹ 5,55,500
        </Typography>
      </Grid>
    </Grid>
  );
}

export function Tags() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <AvatarGroup
        max={4}
        componentsProps={{
          additionalAvatar: {
            sx: {
              height: 24,
              width: 24,
            },
          },
        }}
      >
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Agnes Walker"
          src="/static/images/avatar/4.jpg"
        />
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
        />
      </AvatarGroup>

      
    </Box>
  );
}
