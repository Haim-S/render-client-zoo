import React, {useState, useEffect} from 'react'
import {Paper, TextField, Button} from "@mui/material";


import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerByPayload, clearErrorMessage} from "../../store/slice/authSlice";

import {Alert} from '@mui/material';
const TIME_TO_CLEAR_ERROR_MSG = 2500;




const Register = ({setIsLogin}) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth, error} = useSelector((store)=> store.auth);

  const [formValues, setFormValues] = useState("");
  
  const handleChange = (e) => {
    setFormValues(prevValues => ({...prevValues, [e.target.name]: e.target.value }))
  }
  
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(formValues);
   dispatch(registerByPayload(formValues))
  }
  
  
  useEffect(()=> {
    if(isAuth) navigate("/");
  },[isAuth, navigate]);

  
useEffect(() => {
  if (error) {
    setTimeout(() => {
      dispatch(clearErrorMessage());
    }, TIME_TO_CLEAR_ERROR_MSG);
  }
}, [error]);
  
    return (
      <Paper sx={{width: "350px", height: "450px", marginX: "auto", marginTop: "15%"}} elevation={3}>
        <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column"}}>
            <h1 style={{padding: "0 15px"}}>Register</h1>
            <p style={{padding: "0 15px"}}>Already a member? <span className='sign-color' onClick={()=> setIsLogin(true)}>Sign In</span></p>
            {error ?<Alert severity="error">{error}</Alert> : " " }
            <br/>
        <TextField value={formValues["userName"]} onChange={handleChange} name="userName" type="text" variant='outlined' label='User name' required/>
        <br/>
        <TextField value={formValues["email"]} onChange={handleChange} name="email" type="text" variant='outlined' label='Email' required/>
        <br/>
        <TextField value={formValues["password"]} onChange={handleChange} name="password" type="text" variant='outlined' label='password' required/>
        </div>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "15px"}}>
        <Button type="submit" variant="contained">register</Button>
        </div>
        </form>
      </Paper>
    )
}

export default Register