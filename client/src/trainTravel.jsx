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

function Trains_travel() {
    const classes=useStyles();
    const [train_travel,setTrain_travel] = React.useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/train_travel')
        .then(res=>{
        console.log(res.data)
        setTrain_travel(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    return (
        <Grid item container style={{marginTop:"20px"}}>    
           <Grid xs={12}>
  <ButtonAppBar/>
</Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>train_name</TableCell>
                <TableCell>train_type</TableCell>
                <TableCell>start_time</TableCell>
                <TableCell>end_time</TableCell>
                <TableCell>from_station_id</TableCell>
                <TableCell>journey_time</TableCell>
                <TableCell>station_name</TableCell>
                <TableCell>platform_number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {train_travel.map((row) => (
            <StyledTableRow>
              
              <StyledTableCell align="left">
               {row.train_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.train_type}</StyledTableCell>
              <StyledTableCell align="left">
               {row.start_time}</StyledTableCell>
              <StyledTableCell align="left">
               {row.end_time}</StyledTableCell>
              <StyledTableCell align="left">
               {row.from_station_id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.journey_time}</StyledTableCell>
              <StyledTableCell align="left">
               {row.station_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.platform_number}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        
    )
}

export default Trains_travel
