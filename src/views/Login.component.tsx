import { Typography } from "@mui/material";
import ButtonEMComponent from "../components/atoms/ButtonEM";
import FormTextField from "../components/atoms/FormTextField";

export default function LoginComponent() {
  return (
    <>
      <Typography variant="h4" component="h4" >
        Login
      </Typography>

      <FormTextField />

      <a href={`/verify-otp`}><ButtonEMComponent></ButtonEMComponent></a>
    </>
  );
}
