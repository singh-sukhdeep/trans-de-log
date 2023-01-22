import { Button } from "@mui/material";



export default function ButtonEMComponent(props) {

    return <Button variant="contained">{props?.title || 'Dummy'}</Button>;
}