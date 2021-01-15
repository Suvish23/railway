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


function InsertDeleteTrain() {
  const classes=useStyles();
    const [train_name,setTrain_name] = useState('');
  const [train_type,setTrain_type] = useState(''); 
  const [train_frequency,setTrain_frequency] = useState(''); 
  const [no_of_coaches,setNo_of_coaches] = useState('');
  const [start_time,setStart_time] = useState('');
  const [end_time,setEnd_time] = useState('');
  const [remove,setRemove] = useState('');
  console.log(remove)
   const history = useHistory();
  const onclickinserttrainsHandler =() =>{
      axios.post("http://localhost:5000/insertrains",{
        train_name,
        train_type,
        train_frequency,
        no_of_coaches,
        start_time,
        end_time
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
   const OnclickremovetrainHandler = (e) =>{
       e.preventDefault();
axios.post("http://localhost:5000/removetrains", {
           train_name:remove
       })
   .then((response) =>{
 console.log(response.data)
   })
   .catch((error) =>{
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
             <h1 style={{padding:"20px",textAlign:"center"}}>Add Trains</h1>
          <Grid container  className={classes.content}>

         
        <Grid container xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>train_name
        <TextField
          variant="outlined"
          required
          fullWidth
          id="train_name"
          label="train_name"
          name="train_name"
         
          value={train_name}
          onChange={(e) => {
            setTrain_name(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>train_type
        <TextField
          variant="outlined"
          required
          fullWidth
          id="train_type"
          label="train_type"
          name="train_type"
          value={train_type}
          onChange={(e) => {
            setTrain_type(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>train_frequency
        <TextField
          variant="outlined"
          required
          fullWidth
          id="train_frequency"
          label="train_frequency"
          name="train_frequency"
          value={train_frequency}
          onChange={(e) => {
            setTrain_frequency(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>no_of_coaches
        <TextField
          variant="outlined"
          required
          fullWidth
          id="no_of_coaches"
          label="no_of_coaches"
          name="no_of_coaches"
          value={no_of_coaches}
          onChange={(e) => {
            setNo_of_coaches(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>start_time
        <TextField
          variant="outlined"
          required
          fullWidth
          id="start_time"
          label="start_time"
          name="start_time"
          value={start_time}
          onChange={(e) => {
            setStart_time(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>end_time
        <TextField
          variant="outlined"
          required
          fullWidth
          id="end_time"
          label="end_time"
          name="end_time"
          value={end_time}
          onChange={(e) => {
            setEnd_time(e.target.value);
            }}
        />
      </Grid>
      </Grid>
      <Grid container justify="center">
      <Button onClick={onclickinserttrainsHandler} className={classes.button} >
          
          Submit
            
      </Button>
      </Grid>
      
      <Grid container justify="center" >
          
      <Grid item xs={7} style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>Delete Train
        <TextField
          variant="outlined"
          required
          fullWidth
          
          label=" remove"
          name="remove"
          value={remove}
          onChange={(e) => {
            setRemove(e.target.value);
            }}
        />
      </Grid> 
       <Grid container justify="center">
      <Button  onClick={OnclickremovetrainHandler}className={classes.button} >
          
          Submit
            
      </Button>
      </Grid> 
      </Grid>
      </Grid>
    )
}

export default InsertDeleteTrain
