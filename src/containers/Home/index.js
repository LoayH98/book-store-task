import React from "react";


import PersistentDrawerLeft  from "../../components/Sidebar";
import Books from "../Books"


export default function Home(props) {

  return (
    <div >
      
      <PersistentDrawerLeft ></PersistentDrawerLeft>
      <Books ></Books>
      

    </div>
  );
}
