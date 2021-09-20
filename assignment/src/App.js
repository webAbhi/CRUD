import './App.css';
import { useState } from 'react';
import Home from './components/homepage/Home';
import Signup from './components/register/Signup';
import Login from './components/login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alluser from './components/allusers/Alluser';

function App() {
  const [emplyoee, setEmplyoee] = useState();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              emplyoee && emplyoee._id ?
                <Home emplyoee={emplyoee} setEmplyoee={setEmplyoee} /> :
                <Login setEmplyoee={setEmplyoee} />
            }
          </Route>
          <Route path="/Create">
            <Signup setEmplyoee={setEmplyoee} />
          </Route>
          <Route path="/All">
            <Alluser />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
