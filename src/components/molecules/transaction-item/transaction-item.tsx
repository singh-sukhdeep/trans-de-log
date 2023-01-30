import {
  Avatar,
  AvatarGroup,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import PrimaryHeading from "../transaction-item-heading/transaction-item-heading";


export default function TransactionItemComponent() {
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
