import { Grid  } from '@material-ui/core';
import React , { useEffect  } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import ButtonAppBar from './header';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
 
  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
  });

function Employees() {
    const classes=useStyles();
    const [employees,setEmployees] = React.useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/employees')
        .then(res=>{
        console.log(res.data)
        setEmployees(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    return (
      
      <Grid container >
<Grid xs={12}>
  <ButtonAppBar/>
</Grid>
      
        <Grid item container style={{marginTop:"20px"}}>    
           
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>employees_id</TableCell>
                <TableCell>employees_name</TableCell>
                <TableCell>department</TableCell>
                <TableCell>salary</TableCell>
                <TableCell>ph_no</TableCell>
                <TableCell>email</TableCell>
                <TableCell>station_id</TableCell>
                <TableCell>train_id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {employees.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.employees_id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.employees_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.department}</StyledTableCell>
              <StyledTableCell align="left">
               {row.salary}</StyledTableCell>
              <StyledTableCell align="left">
               {row.ph_no}</StyledTableCell>
              <StyledTableCell align="left">
               {row.email}</StyledTableCell>
              <StyledTableCell align="left">
               {row.station_id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.train_id}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>
        
    )
}

export default Employees
