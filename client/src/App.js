import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from 'aws-amplify';

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
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user })
  }

  async componentDidMount() { //retrieve local storage 
    // & refresh tokens
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
    this.setState({ isAuthenticating : false });
  };
    render() {
      // cognito
      const authProps = {
        isAuthenticated: this.state.isAuthenticated,
        user: this.state.user,
        setAuthStatus: this.setAuthStatus,
        setUser: this.setUser
      }
      // cognito

      return (
        !this.state.isAuthenticating && 
        <div className="App">
          <Router>
            <div >
              <Header auth={authProps} />
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} //component={Home}
                />
                <Route exact path='/console' render={(props) => <Console {...props} auth={authProps} />}  // component={Console}
                />
                <Route
                  exact
                  path='/data-api'
                  render={(props) => <Users {...props} auth={authProps} />}  // component={Users}
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
                  exact path='/data-admin' render={(props) => <UserAdmin {...props} auth={authProps} />} // component={UserAdmin} 
                />
                <Route
                  exact path='/about' render={(props) => <About {...props} auth={authProps} />}  // component={About} 
                />
                <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />}  // component={LogIn} 
                />
                <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />}  //component={Register} 
                />
                <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />}  //component={ForgotPassword} 
                />
                <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />}  //component={ForgotPasswordVerification}
                />
                <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />}  // component={ChangePassword} 
                />
                <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />}  //component={ChangePasswordConfirm}
                />
                <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />}  // component={Welcome} 
                />

              </Switch>
              <Footer />

            </div>
          </Router>
        </div>
      );
    }
  }
  export default App;
