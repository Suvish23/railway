
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trains_coaches from './train_coaches.jsx';
import Employees from './employees.jsx';
import Stations from './stations.jsx';
import Trains from './trains_table.jsx';
import Trains_employees from './train_employees.jsx';
import Station_employees from './stationEmployees.jsx';
import Trains_travel from './trainTravel.jsx';
import Home from './home.jsx';
import InsertDeleteTrain from './insertDelete.jsx'
import InsertandDeletestations from './addDeleteStation.jsx';
import InsertandDeleteEmployees from './addEmployees.jsx';
import SignUp from './signUp.jsx';
import Login from './login.jsx';



function App() {
  return (
     <Router>
       <Switch>
     
       <Route path="/" exact component={Home} />
       <Route path="/employees" exact component={Employees} />
       <Route path="/stationemployees" exact component={Station_employees} />
       <Route path="/stations" exact component={Stations} />
       <Route path="/traincoaches" exact component={Trains_coaches} />
       <Route path="/trainemployees" exact component={Trains_employees} />
       <Route path="/trains" exact component={Trains} />
       <Route path="/traintravel" exact component={Trains_travel} />
       <Route path="/insertdeletetable" exact component={InsertDeleteTrain} />
       <Route path="/insertstations" exact component={InsertandDeletestations} />
       <Route path="/signup" exact component={SignUp} />
       <Route path="/login" exact component={Login} />
       <Route path="/addemployees" exact component={InsertandDeleteEmployees} />
      
       </Switch>
     </Router>
    
    
 
  );
}

export default App;
