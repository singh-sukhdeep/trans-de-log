import { Typography } from "@mui/material";
import ButtonEMComponent from "../components/atoms/ButtonEM";
import FormTextField from "../components/atoms/TextFieldTDL";

export default function ErrorComponent() {
  return (
    <>
      <Typography variant="h4" component="h4" >
        Error Page
      </Typography>

      <a href={`/`}>Click to go to home</a>
    </>
  );
}
