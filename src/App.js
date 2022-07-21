import MyNavbar from './Navbar';
import MyHome from './Home';
import MyMemberships from './Memberships';
import MyMachines from './Machines';
import MyReviews from './Reviews';
import MyTrainer from './Trainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/final">
              <MyHome />
            </Route>
            <Route path="/final/memberships">
              <MyMemberships />
            </Route>
            <Route path="/final/machines">
              <MyMachines />
            </Route>
            <Route path="/final/reviews">
              <MyReviews />
            </Route>
            <Route path="/final/trainers">
              <MyTrainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
