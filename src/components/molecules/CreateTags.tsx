import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Autocomplete,
  Avatar,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import SellIcon from "@mui/icons-material/Sell";
import React from "react";
import { TagHandler } from "./TagHandler/TagHandler";
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  }
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateTags() {
  const [open, setOpen] = React.useState(false);
  const [dateControl, setDateControl] = React.useState("2014-08-18T21:11:54");

  const handleClickOpen = () => {
    console.log("ahhhhhaahahaa");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChangeDate = () => {
    // setOpen(false);
  };
  return (
    <>
      <Grid2 xs={12} sm={6}>
        <IconButton
          onClick={(event) => handleClickOpen()}
          aria-label="delete"
          color="primary"
        >
          Add Tags
          <SellIcon />
        </IconButton>
      </Grid2>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create Transaction
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Grid2 container spacing={3}>
            <Grid2 xs={12} sm={12}>
              <TagHandler tags={top100Films} placeholder="Search or Add new Tags" fieldLabel="Add Tags"></TagHandler>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
