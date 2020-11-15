import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GamesComp from './Components/GamesComp';
import VideoContent from './Components/VideoContent';
import Groups from './Components/Groups';


function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <div className="app">
      <Router>
      {
        user ? (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
                <Switch>
                  <Route path = '/games'>
                    <GamesComp/>
                  </Route>
                  <Route path = '/videos'>
                    <VideoContent/>
                  </Route>
                  <Route path = '/groups'>
                    <Groups/>
                  </Route>
                  <Route path = '/'>
                    <Feed />
                  </Route>
                </Switch>
                <span className = "right_div"></span>
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </Router>
    </div>
  );
}

export default App;
