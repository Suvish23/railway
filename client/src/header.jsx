import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { UserContext } from './userContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const {userstore}=useContext(UserContext)
  const {dispatch} = useContext(UserContext);
  console.log(userstore.id)
  const onclickloginhandler=()=>{
    history.push('/Login')
  }
  const onclickaddEmployeesshandler=()=>{
    history.push('/addEmployees')
  }
  const onclicklogouthandler=()=>{
    dispatch({type :'logout',payload:{name:userstore.name}})
    window.alert("Logged out successfully")
      history.push('/')
  }
  const onclickhandler=()=>{
   
      history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} >
           <Button onClick={onclickhandler}>
           <span style={{color:"#EB984E"}}>Indian Railways</span>
               </Button> 
          </Typography>
          
          
          <Button style={{color:'white'}}>
          {userstore.user}
            </Button>
            {
    (userstore.user==="admin") &&  <Button onClick={onclickaddEmployeesshandler} style={{color:"white"}}>Add Employees
    </Button>
  }
          <Button color="inherit" onClick={onclickloginhandler}>Login</Button>
             <Button onClick={onclicklogouthandler} color="inherit" style={{color:'white'}} disabled={!userstore.user} ><ExitToAppIcon/>
           </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}






        //   <Button onClick={onclicklogouthandler} color="inherit" className={classes.button} disabled={!userstore.user} ><ExitToAppIcon/>
        //   </Button>