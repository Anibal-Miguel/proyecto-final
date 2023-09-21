import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import React from 'react'
import { Button, InputBase, Typography, makeStyles } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


const selectionRange = {
    startDate: new Date(20023,9,19) ,
    endDate: new Date(20023,9,19),
    key: "selection",
}


const DatePicker = () => {
    const classes = useStyle()
    const navigate = useNavigate()
 
    const handleSelect =  () => {}
  return (
    <div className={classes.root}>
        <DateRangePicker ranges={[selectionRange]} 
        onChange={handleSelect}/>
        <div className={classes.inputSection}>
            <Typography variant="h5" align='center'>N. de Comensales</Typography>
            <div className={classes.people}>
                <InputBase placeholder="2pax" inputProps={{className: classes.input}}/>
                <People/>
            </div>
            <Button onClick={()=> navigate('/search')}>Buscar Mesa</Button>
        </div>
    </div>
  )  
}


const useStyle = makeStyles((theme) => ({
    root: {
        position:"absolute",
        top: "13vh",
        left: "30vw",
        zIndex:"50",
        [theme.breakpoints.down("sm")]:{
            top:"16vh",
            left: "0",
        }
        
    },

    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& button:hover": {
            backgroundColor: "rgba(255,103,21,0.4)",
            color: "#fff",
        }
    },

    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        width: "5vw",
        border: "1px solid #ccc",
        margin: theme.spacing (0,2,2,0),
        padding: theme.spacing(1,0,1,3),
    }
    

}))

export default DatePicker
