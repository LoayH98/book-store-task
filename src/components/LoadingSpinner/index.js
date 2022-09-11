import React, { useEffect } from "react";
import {  CircularProgress } from "@material-ui/core";
import './style.css'
export default function LoadingSpinner(props) {

  
 const spinner= document.getElementById('spinner')   


      useEffect(()=>{
        if(props.open){
          if(spinner)
           spinner.classList.remove('hide-spinner')
        }
        else{
          if(spinner)
          spinner.classList.add('hide-spinner')
        }
      },[props.open])


  return (
      
    <div  className="container hide-spinner" id='spinner' >
      <CircularProgress color="inherit"  />
    </div>
  );
}
