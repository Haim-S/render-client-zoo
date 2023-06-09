

import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card as CardAnimal} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCard from './EditCard';

import{useDispatch, useSelector} from "react-redux";
import {deleteAnimal} from "../../store/slice/zooSlice";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card({item}) {

  const dispatch = useDispatch();

  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardAnimal sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#7ed6df" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="my zoo"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.imgUrl}
        alt="Paella dish"
      />


      <CardContent>
{/* 
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
        <Typography  sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} variant='h5'>
                {item.name}
                 <span className='card-title-type'>type:{item.type}</span>
        </Typography>
        <Typography variant='p'>
             Age: {item.age} years old 
        </Typography>



      </CardContent>


      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton onClick={()=> dispatch(deleteAnimal(item._id))}>
        <DeleteIcon/>
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
       
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        <EditCard key={item._id} item={item}/>
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography> */}
        

        </CardContent>
      </Collapse>
    </CardAnimal>
  );
}

