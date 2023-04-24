import React from 'react'
import { AppBar, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {logoutByToken} from "../../../store/slice/authSlice";
import {getLocalStorageValue} from "../../../utils/localStorage.utils"

const Navbar = () => {

  const {isAuth} = useSelector((store)=> store.auth);
  const dispatch = useDispatch();

  return (

        <AppBar sx={{background: "#130f40", padding: 1}}>
          <div style={{display: "flex", alignContent: "center", justifyContent: "space-between"}}>
           <div>
            <Typography variant='h3'>My Zoo</Typography>
           </div>
           <div style={{padding: "15px", width: "15%", display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>
            <Link to={"/"}>Home</Link>
            {isAuth ?
            <Link onClick={() => dispatch(logoutByToken(getLocalStorageValue("ac_token")))}>Log Out</Link>:
            <Link to={"/login"}>Login</Link>
             }
           </div>
           </div>
        </AppBar>

  )
}

export default Navbar