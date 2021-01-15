import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import {useHistory} from 'react-router-dom';
import Header from './header';
import train from './train.jpg'


const useStyles=makeStyles(()=>({
    img:{
        backgroundImage:`url(${train})`,
      
        minHeight: '100vh',
      
        backgroundPosition: 'center center/cover',
        backgroundSize: '100vw',
    },
    button:{
        marginRight:"50px",
        '&:hover':{
            backgroundColor:"black"
        }
    }
}))


function Home() {
    const history=useHistory();
    const classes=useStyles();
    const clickontrainshandler =() =>{
        history.push('/trains')
    }
    const clickonstationshandler =() =>{
        history.push('/stations')
    }
    const clickonemployeeshandler =() =>{
        history.push('/employees')
    }
    const clickontraincoacheshandler =() =>{
        history.push('/traincoaches')
    }
    const clickontrainemployeesshandler =() =>{
        history.push('/trainemployees')
    }
    const clickontraintravelshandler =() =>{
        history.push('/traintravel')
    }
    const clickonstationemployeesshandler =() =>{
        history.push('/stationemployees')
    }
    return (
        <Grid container>
            <Grid xs={12}>
            <Header/>
            </Grid>
           
           
              
         
       <Grid xs={12} className={classes.img}>
           
           <Grid container justify="center" xs={12} style={{paddingTop:"20px",paddingBottom:"20px"}}>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickontrainshandler}>trains</Button>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickonstationshandler}>stations</Button>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickonemployeeshandler}>employees</Button>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickontraincoacheshandler}>Trains_coaches</Button>
           </Grid>
           <Grid container justify="center">
           <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickontrainemployeesshandler}>Employees in Trains</Button>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickonstationemployeesshandler}>Employees in Stations</Button>
       <Button color="inherit" className={classes.button} style={{color:"white",border:"1px solid"}} onClick={clickontraintravelshandler}>Trains in Travel</Button>
           </Grid>
       </Grid> 
       </Grid>
    )
}

export default Home
