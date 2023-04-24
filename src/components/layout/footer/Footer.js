import React from 'react'
import { Facebook, LinkedIn, Language, GitHub } from "@mui/icons-material"
import "./footer.css"


import { Box, Container} from "@mui/material";

const social_links = [
  {
    icon: <Facebook />,
  },
  {
    icon: <LinkedIn />,
  },
  {
    icon: <Language />,
  },
  {
    icon: <GitHub />,
  },
]

const Footer = () => {


  return (
    <Box sx={{background: "white", padding: 1}}>
           <Container sx={{margin: "0 auto", width: "33%", height: "100%" ,display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column"}}>
           <div className='icons'>
           {social_links.map((item)=>(
            <a className='tag_a'>{item.icon}</a>
        ))}
         <p>All rights reserved to AHs</p>
           </div>
           </Container>
    </Box>
  )
}

export default Footer