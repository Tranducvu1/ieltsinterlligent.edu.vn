import { BrowserRouter as Router, Switch,Link } from "react-router-dom";
import Head from '../Header/header';
import Contact  from '../Contact/contact'
import { Route } from "react-router";

function App() {
    return (  
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/head">Head</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                  <Route exact path='/'>
                  </Route>
                  <Route path='/head'>
                    <Head />
                  </Route>
                  <Route path='/contact'>
                    <Contact/>
                  </Route>
            </Switch>
        </Router>
        );

    }
    export default App;