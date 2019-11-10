import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Console from './components/Console';
import About from './components/pages/About';
// import TrackersAPI from './components/TrackersAPI';

import Users from './components/users/Users.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import UserAdmin from './components/users/UserAdmin';
library.add(faEdit);

class App extends Component {

  render() {  
    return (
      <div className="App">
        <Router>
        <div > 
            <Header /> 
            <Switch>
            <Route exact path="/" component={Home}
            /> 
            <Route exact  path='/console'  component={Console}
            /> 
            <Route
              exact
              path='/data-api' 
              component={Users}
              // component={TrackersAPI}
              // render={() => (
              //   <React.Fragment>
              //     />
              //   <TrackersAPI >
              //       {this.state.trackersAPI}
              //       children
              //   </TrackersAPI>
              //   </React.Fragment>
              // )} 
              /> 
            <Route
              exact path='/data-admin' component={UserAdmin} />
            <Route
              exact path='/about' component={About} />
            </Switch>
            <Footer />

         </div>  
        </Router>
      </div>
    );
  }
}
export default App;
