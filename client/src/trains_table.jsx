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

function Trains() {
    const classes=useStyles();
    const [trains_table,setTrains_table] = React.useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/trains')
        .then(res=>{
        console.log(res.data)
        setTrains_table(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    return (
        <Grid item container style={{marginTop:"20px"}}>    
           
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>train_id</TableCell>
                <TableCell>train_name</TableCell>
                <TableCell>train_type</TableCell>
                <TableCell>train_frequency</TableCell>
                <TableCell>No of Coaches</TableCell>
                <TableCell>Start_time</TableCell>
                <TableCell>End_time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {trains_table.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.train_id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.train_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.train_type}</StyledTableCell>
              <StyledTableCell align="left">
               {row.train_frequency}</StyledTableCell>
              <StyledTableCell align="left">
               {row.no_of_coaches}</StyledTableCell>
              <StyledTableCell align="left">
               {row.start_time}</StyledTableCell>
              <StyledTableCell align="left">
               {row.end_time}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        
    )
}

export default Trains
