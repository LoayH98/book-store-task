import React from 'react'
import {FormControl,InputLabel,Input ,Button} from '@material-ui/core'
import "./style.css"

export default function SearchArea(props){

    return(
        <div className="search-area">

          <form action="" onSubmit={props.searchBook} type="submit">
            <InputLabel htmlFor="bookName" type="text">Enter name of the book</InputLabel>
            <Input id="bookName" name='input' onChange={props.handleSearch}></Input>
            <Button type="submit" variant="outlined" >Search</Button>
          </form>
          
        </div>
    )
}