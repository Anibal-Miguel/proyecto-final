import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import logo from "../imagen/sushifeel-plaza-urquiza.jpg"
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'


const Header = () => {
    const [mobile, setMobile] = useState (true)
    const [draweropen, setDrawerOpen]= useState (true)  
    const classes = useStyle()

    useEffect(()=>{
        const responsiveness= () => window.innerWidth < 900 ? setMobile (true): setMobile(false)
        responsiveness();
        window.addEventListener("resize", ()=>responsiveness())
    },[])
    
    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setDrawerOpen (true)
        }
        
        const handleDrawerClose= () => {
            setDrawerOpen (false)
        }
        
        const headerData = ["Menu del Dia", "Carta", "Promociones"]

        const getDrawerChoices= () => { 
            return headerData.map((data)=> {
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }
        
        
        return(
            <Toolbar className={classes.toolbar}>
                <IconButton{...{
                    edge:"start", 
                    color:"#fff",
                    "aria-label":"menu",
                    "aria-haspopup":"true",
                    onClick: handleDrawerOpen,
                }}> 
                <MenuIcon fontSize="large"/>
                </IconButton>
                    <Drawer {...{
                        anchor: "left",
                        open: draweropen,
                        onClose: handleDrawerClose,}}> 
                        <div>{getDrawerChoices()}</div>
                    </Drawer> 
                    <Link to="/">
                        <img src={logo} className={classes.logo} alt = "logo"/>  
                    </Link>
                    <div className={classes.right}>
                        <Typography> Sing in </Typography>
                        <Avatar className = {classes.avatar}/>

                    </div>         
            </Toolbar>
        )
    }

    const displayDesktop = () => {
        return (
        <Toolbar className={classes.toolbar}>
            <Link to="/">
                <img src={logo} className={classes.logo} alt = "logo"/>  
            </Link>
            <div className={classes.center}>
                <InputBase fullWidth placeholder="Serch here..." inputProps={{className: classes.input}}/>
                <SearchIcon/>            
            </div>    
            <div className={classes.right}>
                <Typography>
                    Sing in
                </Typography>
                <Avatar className={classes.avatar}/>
            </div>
        </Toolbar>
        )
    }
    
    return (
        <AppBar className={classes.root}>
            {mobile ? displayMobile() : displayDesktop()}
        </AppBar>    
        )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position:"static",
        top: 0,
        backgroundColor: "fff",
        zIndex: 99,
        width: "100vw",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
    },
    logo:{
        height: "60px",
        margin: theme.spacing(1,0,0,4),
        objectFit: "contain",
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5)
    },
    center: {
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        borderRadius: "999px",
        minWidth: "310px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    right: {
        color: "355",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(2),
    },
    avatar: {
        marginLeft: theme.spacing(2),
    }



}))


export default Header
