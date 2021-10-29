
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './home.css';
import { Route } from "react-router";
 export default function App() {
  return (
  <Home/>,
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
 
}
