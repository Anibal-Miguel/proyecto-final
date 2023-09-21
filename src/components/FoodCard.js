import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const FoodCard = ({src, title, description}) => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
    <figure className={classes.imagewrapper}>
      <img className={classes.media} src={src} alt={title}/>
      {title}
    </figure>
    <Typography variant="h5" color="textPrimary">{title}</Typography>
    <Typography variant="h6" color="textSecondary">{description}</Typography>
    </div>
    
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4,0,2,0),
    [theme.breakpoints.down("xs")]: {
      
    }
  },

  imagewrapper:{
    overflow: "hidden",

  },

  media:{
    height: "400px",
    width:"600px",
    objectFit: "cover",
    transform: "scale(1)",
    transition: ".4s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)"
    },
    [theme.breakpoints.down("xs")]:{
      height:"200px"
    }
  }

}))


export default FoodCard
