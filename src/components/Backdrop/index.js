import React, { useEffect } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import './style.css'
export default function Loader(props) {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };

      useEffect(()=>{
        if(props.open){
            handleToggle();
        }
        else handleClose();
      },[props.open])


  return (
      
    <Backdrop className="backdrop" open={open} >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
