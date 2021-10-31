import { BrowserRouter as Router, Switch,Link } from "react-router-dom";
import Home from '../Home/home';
import Head from '../Header/header'
import { Route } from "react-router";

function App() {
    return (  
        <Router>
           
            <dir>
                <Link to='/'>Home</Link>
                <Link to='/header'>Header</Link>
            </dir>
            <Switch>
                <Route exact path='/'>
                    <Home>
                    <p> Hellolol</p>
                    </Home>
                </Route>
                <Route path='header'>
                    <Head/>
                </Route>
            </Switch>
        </Router>
        );

    }
    export default App;