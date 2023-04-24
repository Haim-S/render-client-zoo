import React from 'react'
import {Routes as RoutesApp, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';


import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login"




const Routes = () => {
    const {isAuth} = useSelector((state)=> state.auth);
   

  return (
<RoutesApp>
    <Route path="/" element={<Layout/>}>
    <Route path='/' element={isAuth ? <Home/> : <Navigate to="login" replace/>} />
    <Route path="/login" element={<Login/>}/>
    </Route>
  </RoutesApp>
  )
}

export default Routes