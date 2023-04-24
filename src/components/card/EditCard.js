import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {updateAnimal} from "../../store/slice/zooSlice"
import {Box, TextField, Button, Stack} from '@mui/material';



const EditCard = ({item}) => {

  

  const dispatch = useDispatch();


    const [EditOneAnimal, setEditOneAnimal ] = useState({
        "name": "",
        "age": "",
        "type": ""
    });

const targetValue = (e) => {
    const value = e.target.value;
    setEditOneAnimal({...EditOneAnimal, [e.target.name]: value});
}

const EditSave = (id, EditOneAnimal) => {
    console.log(EditOneAnimal);
    // editanimal(id, EditOneAnimal);
    const values = {
      id: id,
      name: EditOneAnimal.name,
      type: EditOneAnimal.type,
      age: EditOneAnimal.age,
    }
    console.log(values);
    dispatch(updateAnimal(values));
    setEditOneAnimal("");
}

// console.log(EditOneAnimal);
  return (
<Box>
 <TextField name="name" value={EditOneAnimal.name} onChange={targetValue} type="text"  id="standard-basic" label="Name" variant="standard" />
 <TextField name="age"  value={EditOneAnimal.age} onChange={targetValue} type="number"  id="standard-basic" label="Age" variant="standard" />
 <TextField name="type" value={EditOneAnimal.type} onChange={targetValue} type="text"  id="standard-basic" label="Type" variant="standard" />
 <Stack sx={{marginTop: "10px"}} direction="row" spacing={2}>
 <Button onClick={()=> EditSave(item._id, EditOneAnimal)} variant="contained" href="#contained-buttons">Edit Card</Button>
 </Stack>
</Box>
  )
}

export default EditCard