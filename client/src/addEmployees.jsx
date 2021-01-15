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


function InsertandDeleteEmployees() {
  const classes=useStyles();
    const [employees_name,setEmployees_name] = useState('');
  const [department,setDepartment] = useState(''); 
  const [salary,setSalary] = useState(''); 
  const [ph_no,setPh_no] = useState('');
  const [email,setEmail] = useState('');
  const [station_id,setStation_id] = useState('');
  const [train_id,setTrain_id] = useState('');
  const [delete_emp,setDelete_emp] = useState('');
  
   const history = useHistory();

   const OnclickaddEmployeesHandler = (e) =>{
       e.preventDefault();
axios.post("http://localhost:5000/adddeleteemployees", {
    employees_name:employees_name,
    department:department,
    salary:salary,
    ph_no:ph_no,
    email:email,
    station_id:station_id,
    train_id:train_id,
       })
   .then((response) =>{
 console.log(response.data)
   })
   .catch((error) =>{
       console.log(error)
   })
 }
   const OnclickdeleteHandler = (e) =>{
       e.preventDefault();
axios.post("http://localhost:5000/deleteemployees", {
   employees_name:delete_emp
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
             <h1 style={{padding:"20px",textAlign:"center"}}>Add Employees</h1>
          <Grid container  className={classes.content}>

         
        <Grid container xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>employees_name
        <TextField
          variant="outlined"
          required
          fullWidth
          id="employees_name"
          label="employees_name"
          name="employees_name"
         
          value={employees_name}
          onChange={(e) => {
            setEmployees_name(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>department
        <TextField
          variant="outlined"
          required
          fullWidth
          id="department"
          label="department"
          name="department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>salary
        <TextField
          variant="outlined"
          required
          fullWidth
          id="salary"
          label="salary"
          name="salary"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>ph_no
        <TextField
          variant="outlined"
          required
          fullWidth
          id="ph_no"
          label="ph_no"
          name="ph_no"
          value={ph_no}
          onChange={(e) => {
            setPh_no(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>email
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>station_id
        <TextField
          variant="outlined"
          required
          fullWidth
          id="station_id"
          label="station_id"
          name="station_id"
          value={station_id}
          onChange={(e) => {
            setStation_id(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>train_id
        <TextField
          variant="outlined"
          required
          fullWidth
          id="train_id"
          label="train_id"
          name="train_id"
          value={train_id}
          onChange={(e) => {
            setTrain_id(e.target.value);
            }}
        />
      </Grid>
      </Grid>
      <Grid container justify="center">
      <Button onClick={OnclickaddEmployeesHandler} className={classes.button} >
          
          Submit
            
      </Button>
      </Grid>
      <Grid container justify="center" >
          
          <Grid item xs={7} style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>Delete Employees
            <TextField
              variant="outlined"
              required
              fullWidth
              
              label=" delete_emp"
              name="delete_emp"
              value={delete_emp}
              onChange={(e) => {
                setDelete_emp(e.target.value);
                }}
            />
          </Grid> 
           <Grid container justify="center">
          <Button  onClick={OnclickdeleteHandler}className={classes.button} >
              
              Submit
                
          </Button>
          </Grid> 
          </Grid>
      
     
      </Grid>
    
    )
}

export default InsertandDeleteEmployees
