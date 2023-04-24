import React from 'react'
import Navbar from "./navbar/Navbar";
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import {Container} from "@mui/material";

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Container sx={{margin: "15px"}}>
        <Outlet/>
    </Container>
    </main>
    <Footer/>
    </>
  )
}

export default Layout