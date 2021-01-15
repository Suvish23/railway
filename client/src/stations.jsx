import { Button, Grid  } from '@material-ui/core';
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
import {useHistory} from 'react-router-dom'
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

function Stations() {
    const classes=useStyles();
    const history=useHistory();
    const [stations,setStations] = React.useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/stations')
        .then(res=>{
        console.log(res.data)
        setStations(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
      const onclickSubmithandler =()=>{
        history.push('/insertstations')
      }
    return (
        <Grid item container style={{marginTop:"20px"}}>    
           <Grid xs={12}>
  <ButtonAppBar/>
</Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>station_id</TableCell>
                <TableCell>station_name</TableCell>
                
                <TableCell>no_of_employees</TableCell>
                <TableCell>no_of_platforms</TableCell>
                <TableCell>no_of_visits perday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {stations.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.station_id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.station_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.no_of_employees}</StyledTableCell>
              <StyledTableCell align="left">
               {row.no_of_platforms}</StyledTableCell>
              <StyledTableCell align="left">
               {row.no_of_visits_perday}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        <Button onClick={onclickSubmithandler}>
          ADD STATIONS
        </Button>
        </Grid>
        
    )
}

export default Stations
