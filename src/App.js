import MyNavbar from './Navbar';
import MyHome from './Home';
import MyMemberships from './Memberships';
import MyMachines from './Machines';
import MyReviews from './Reviews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MyHome />
            </Route>
            <Route path="/memberships">
              <MyMemberships />
            </Route>
            <Route path="/machines">
              <MyMachines />
            </Route>
            <Route path="/reviews">
              <MyReviews />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
