import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Console from './components/Console';
import About from './components/pages/About';
import Users from './components/users/Users.js';

import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
// import TrackersAPI from './components/TrackersAPI';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import UserAdmin from './components/users/UserAdmin';
library.add(faEdit);

class App extends Component {

state = {
  isAuthenticated: false,
  user: null
}

setAuthStatus = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

setUser = user => {
  this.setState({ user: user })
}
  render() {
    return () {
      const authProps = {
        isAuthenticated: this.state.isAuthenticated,
        user: this.state.user,
        setAuthStatus: this.state.setAuthStatus,
        setUser: this.state.setUser
      }
    }
      <div className="App">
        <Router>
          <div >
            <Header />
            <Switch>
              <Route exact path="/" component={Home}
              />
              <Route exact path='/console' component={Console}
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
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/forgotpasswordverification" component={ForgotPasswordVerification} />
              <Route exact path="/changepassword" component={ChangePassword} />
              <Route exact path="/changepasswordconfirmation" component={ChangePasswordConfirm} />
              <Route exact path="/welcome" component={Welcome} />

            </Switch>
            <Footer />

          </div>
        </Router>
      </div>
    );
  }
}
export default App;
