import React, {useEffect} from 'react'
import {useDispatch ,useSelector } from 'react-redux';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import {allAnimals} from "../../store/slice/zooSlice";


const CardList = () => {

    const {animals} = useSelector((store)=> store.zoo);
    const dispatch = useDispatch();

    
useEffect(() => {


  dispatch(allAnimals());

},[animals]);
    

  return (
    <Grid sx={{marginTop: 2}} container spacing={5}>
        {animals?.map((item) => (
        <Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
        <Card key={item._id} item={item}/>
        </Grid>
        ))}
  </Grid>
  )
}

export default CardList