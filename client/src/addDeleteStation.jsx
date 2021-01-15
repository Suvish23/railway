import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(()=>({
  content:{
  //  paddingLeft:"25vw"
  justifyContent:"center"
  },
  button:{
    color:"black", 
   
    "&:hover": {
      color:"white",
      backgroundColor: "black"
    },
  }
}));


function InsertandDeletestations() {
  const classes=useStyles();
    const [station_name,setStation_name] = useState('');
  const [no_of_employees,setNo_of_employees] = useState(''); 
  const [no_of_platforms,setNo_of_platforms] = useState(''); 
  const [no_of_visits_perday,setNo_of_visits_perday] = useState('');
  const [stat_name,setStat_name] = useState('');
  
  
   const history = useHistory();
  const onclickinsertstationHandler =() =>{
      axios.post("http://localhost:5000/addstations",{
        station_name,
        no_of_employees,
        no_of_platforms,
        no_of_visits_perday,
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
const OnclickremovestationHandler = (e) =>{
   
 axios.post("http:localhost:5000/stat_remove", {
    station_name: stat_name
        })
    .then((response) =>{
        console.log("came here")
  console.log(response.data)
    })
    .catch((error) =>{
        console.log("error")
        console.log(error)
    })
  }
const onclickbackhandler = ()=>{
    history.push('/')
    }
    return (
        <Grid>
             <Grid item xs={12}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/></Button>
        </Toolbar>
      </AppBar>
            </Grid>
             <h1 style={{padding:"20px",textAlign:"center"}}>Add Stations</h1>
          <Grid container  className={classes.content}>

         
        <Grid container xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>station_name
        <TextField
          variant="outlined"
          required
          fullWidth
          id="station_name"
          label="station_name"
          name="station_name"
         
          value={station_name}
          onChange={(e) => {
            setStation_name(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>no_of_employees
        <TextField
          variant="outlined"
          required
          fullWidth
          id="no_of_employees"
          label="no_of_employees"
          name="no_of_employees"
          value={no_of_employees}
          onChange={(e) => {
            setNo_of_employees(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>no_of_platforms
        <TextField
          variant="outlined"
          required
          fullWidth
          id="no_of_platforms"
          label="no_of_platforms"
          name="no_of_platforms"
          value={no_of_platforms}
          onChange={(e) => {
            setNo_of_platforms(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>no_of_visits_perday
        <TextField
          variant="outlined"
          required
          fullWidth
          id="no_of_visits_perday"
          label="no_of_visits_perday"
          name="no_of_visits_perday"
          value={no_of_visits_perday}
          onChange={(e) => {
            setNo_of_visits_perday(e.target.value);
            }}
        />
      </Grid>
     
    
    </Grid>
      <Grid container justify="center">
      <Button onClick={onclickinsertstationHandler} className={classes.button} >
          
          Submit
            
      </Button>
      </Grid>
      
      <Grid container justify="center" >
          
      <Grid item xs={7} style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>Delete Train
        <TextField
          variant="outlined"
          required
          fullWidth
          
          label=" stat_name"
          name="stat_name"
          value={stat_name}
          onChange={(e) => {
            setStat_name(e.target.value);
            }}
        />
      </Grid> 
       <Grid container justify="center">
      <Button  onClick={OnclickremovestationHandler}className={classes.button} >
          
          Submit
            
      </Button>
      </Grid> 
      </Grid>
      </Grid>
    )
}

export default InsertandDeletestations
