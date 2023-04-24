import React from 'react'
import {Box} from "@mui/material";
import CardList from '../../components/cardList/CardList'
import CreateCard from '../../components/createCard/CreateCard';

const Home = () => {
  return (
    <Box>
      <CreateCard/>
      <CardList/>
      </Box>
  )
}

export default Home