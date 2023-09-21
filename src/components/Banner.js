import { Button, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import background_imagen from "../imagen/sushifeel-plaza-urquiza.jpg"

const Banner = () => {
  const classes= useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant="h2">ELIGE TU MENU</Typography>
        <Button variant="contained">Carta</Button>

      </div>
    </div>
    
  )
}


const useStyle = makeStyles((theme) => ({
  root: {
     height:'50vh',
     position:"relative",
     backgroundImage: `url(${background_imagen})`,
     backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",    
  },

  info:{
    backgroundColor:"#000",
    color:"#fff",
    width: "350px",
    padding: theme.spacing(2),
    "& h2": {
      marginBotton: theme.spacing(4),
    },
    "& button":{
        backgroundColor:"rgba(255,103,31)",
        color:"#fff",
        textTransform:"inherit",
        fontSiza:"1.2rem",
        fontWeight:"bold",
    },
    //cambia el color del boton
    "& button:hover": {
      backgroundColor: "#fff",
      color: "rgba(255,103,31)",
    }
  }

}))


export default Banner
