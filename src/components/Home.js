import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import FoodCard from './FoodCard'
import DatePicker from './DatePicker'
import { useState } from 'react'
import mockDate from "../mockDate"


const Home = () => {
  const classes= useStyle()
  const [showdate, setShowDates]= useState(false)
  return (
    <>
    <CssBaseline/>
    <div className={classes.root}>
      <div className={classes.dates}>
        <Button onClick={()=> setShowDates(!showdate)}>
          {
            showdate ? "Hide": "Search Dates"
          }
        </Button>         
      </div>
      {
          showdate && <DatePicker/>
        }
      <Banner/>
      <Grid container className={classes.section} spacing={3}>
        {
          mockDate.map(({src, title, description}, index)=> (
            <Grid item sm="6" md="4" lg="3" >
              <FoodCard src={src} title={title} description={description} key={index}/>
            </Grid>
          ))
        }
       
      </Grid>
    </div>
    </>
  )
}



const useStyle = makeStyles((theme) => ({
  root: {
     display: "flex",
     flexDirection: "column",  
     margin: theme.spacing(2)   ,
  },
  dates:{
    display: " flex",
    flexDirection: "column",
    "& button": {
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      color: "rgba(255,103,31,0.4)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight:"bold",
    },
    "& button:hover":{
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    }

  }

}))

export default Home

