
import React, {useState} from 'react'
import {Paper, TextField, Button, Select, MenuItem} from "@mui/material";
import { ANIMAL_TYPE_OPTIONS } from '../../constants/constant';
import{useDispatch} from "react-redux";
import {createAnimal} from "../../store/slice/zooSlice";
import "./createCard.css"


const initialFormValues =  {
    type: ANIMAL_TYPE_OPTIONS[0].value
  };




const CreateCard = () => {

const dispatch = useDispatch();
const [formValues, setFormValues] = useState(initialFormValues);



const handleChange = (e) => {
  setFormValues(prevValues => ({...prevValues, [e.target.name]: e.target.value }))
}

const handleSubmit = (e) => {
 e.preventDefault();
dispatch(createAnimal(formValues))
 setFormValues((prev) => ({...prev, ...initialFormValues}));
}

  return (
    <Paper sx={{width: "600px", height: "300px", marginX: "auto"}} elevation={3}>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-column'>
                <TextField value={formValues["name"]} onChange={handleChange} name="name" type="text" variant='outlined' label='Name' required/>
                <TextField value={formValues["age"]} onChange={handleChange} name="age" type="number" variant='outlined' label='Age' required/>
          </div>
          <div className='form-column'>
<Select sx={{width: "200px"}} value={formValues["type"]} onChange={handleChange}  name="type" label="Type" required>
{ANIMAL_TYPE_OPTIONS.map((option, i) =>(
  <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
))}
</Select>
<TextField value={formValues["imgUrl"]} onChange={handleChange}  name="imgUrl" type="text" variant='outlined' label='Image'/>
          </div>
          <Button type="submit" variant="contained">ADD ANIMAL</Button>
        </form>
    </Paper>
  )
}

export default CreateCard;
