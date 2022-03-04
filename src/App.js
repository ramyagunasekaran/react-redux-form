import React from 'react';
import './App.css';
import CommunicationDetails from './components/CommunicationDetails';
import PersonalDetails from './components/PersonalDetails';
import CardDetails from './components/CardDetails';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Confirm from './components/Confirm';
import SubmitSuccessful from './components/SubmitSuccessful';
import SubmitFailure from './components/SubmitFailure';


function App() {
  return (
    <div >
      <header className='header'>
        <a href='/'><h1 className='app-head'>Ebook</h1></a>
      </header>

      <Router>

        <div >

          <Switch>

            <Route exact path="/"><PersonalDetails /></Route>
            <Route exact path="/cd"><CommunicationDetails /></Route>
            <Route exact path="/cad"><CardDetails /></Route>
            <Route exact path="/con"><Confirm /></Route>
            <Route exact path="/fop"><SubmitSuccessful /></Route>
            <Route exact path="/sf"><SubmitFailure /></Route>


          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
