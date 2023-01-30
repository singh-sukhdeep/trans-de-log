import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Avatar,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { LocalizationProvider } from "@mui/x-date-pickers";
import CreateTags from "./CreateTags";
import { useFormik } from "formik";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function CreateTransaction() {
  const [open, setOpen] = React.useState(false);
  const [dateControl, setDateControl] = React.useState("2014-08-18T21:11:54");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChangeDate = () => {
    // setOpen(false);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Transaction
      </Button>
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
          </Toolbar>
        </AppBar>
        <DialogContent>
          <form>
            <Grid2 container spacing={3}>
              <Grid2 xs={12} sm={6}>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="outlined-required"
                  label="Title"
                />
              </Grid2>
              <Grid2 xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Transaction Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="debit"
                  >
                    <FormControlLabel
                      value="debit"
                      control={<Radio />}
                      label="Debit"
                    />
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label="Credit"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid2>
              <Grid2 xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Transaction Date"
                    inputFormat="DD/MM/YYYY"
                    value={dateControl}
                    onChange={handleOnChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid2>
              <Grid2 xs={12} sm={6}>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  type={"number"}
                  id="outlined-required"
                  label="Amount"
                />
              </Grid2>

              <Grid2 xs={12} sm={6}>
                <FormControl required sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-simple-select-required-label">
                    Bank/Source
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="Age *"
                  >
                    <MenuItem value={10}>
                      <Avatar
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                        alt="HDFC Bank"
                        variant="square"
                        src="/hdfc.png"
                      />
                      HDFC Bank
                    </MenuItem>
                    <MenuItem value={20}>
                      <Avatar
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                        alt="HDFC Bank"
                        variant="square"
                        src="/hdfc.png"
                      />
                      HDFC Bank
                    </MenuItem>
                    <MenuItem value={30}>
                      <Avatar
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                        alt="HDFC Bank"
                        variant="square"
                        src="/hdfc.png"
                      />
                      HDFC Bank
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 xs={12} sm={6}>
                <FormControl required sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-simple-select-required-labels">
                    Transaction Method
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-requireds"
                    label="Transaction Method *"
                  >
                    <MenuItem value={10}>Cash</MenuItem>
                    <MenuItem value={20}>Phonepe</MenuItem>
                    <MenuItem value={30}>Gpay</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 xs={12} sm={6}>
                <CreateTags />
              </Grid2>
            </Grid2>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
