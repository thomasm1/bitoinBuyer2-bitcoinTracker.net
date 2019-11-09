import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import uuid from 'uuid';
// import axios from 'axios';

import Header from './components/layout/Header';
import Home from './components/Home';
import Console from './components/Console';
import About from './components/pages/About';
import TrackersAPI from './components/TrackersAPI'; 

import './App.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit);

class App extends Component {

  // constructor(){
  //   super()

  //   this.state = {  // local data overwritten by Mock api
  //   trackers:coins,
  //   trackersAPI: []
  // };

  // }
  // // SETUP for MOCK API
  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) =>
  //       // this.setState({ trackers: res.data })
  //       this.setState({ trackersAPI: res.data })
  //     );
  // }

  // // Track/Not Track
  // trackThis = (id) => {
  //   console.log(id + ' tracked! ..from App.js');
  //   this.setState({
  //     trackers: this.state.trackers.map(tracker => {
  //       if (tracker.id === id) {
  //         tracker.tracking = !tracker.tracking;
  //       }
  //       return tracker;
  //     })
  //   });
  // };

  // // Delete Coin (Tracking)
  // delCoin = (id) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then((res) =>
  //       this.setState({
  //         trackers: [...this.state.trackers.filter(tracker => tracker.id !== id)]
  //       })
  //     );
  //   console.log('delcoin:  ' + id);
  // };

  // // Add New Coin Type (not default tracking)
  // addCoin = (title, symbol) => {
  //   const newCoin = {
  //     id: uuid.v4(),
  //     title: title,
  //     symbol: symbol,
  //     tracking: false
  //   }
  //   console.log(symbol + ': symbol', title + ': title');
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/todos', {
  //       title,
  //       completed: false
  //     })
  //     .then((res) => {
  //       res.data.id = uuid.v4();
  //       this.setState({ trackers: [...this.state.trackers, newCoin] });
  //     });
  // };

  render() {
    // console.log('App.js ', this.state.trackersAPI);
 
    
    return (
        <div className="App">
      <Router>
          <div className="Container">
            <Header />
            <Route 
              path='/'
              componenent={Home}
           />

            <Route 
              path='/console'
              component={Console}
            
            />

            <Route 
              path='/data-api' 
              component={TrackersAPI}
              render={() => (
                <React.Fragment>
            />
                <TrackersAPI >
                {this.state.trackersAPI}
                children
                </TrackersAPI>  
                </React.Fragment>
              )} />

            <Route path='/about' component={About} />

          </div>
      </Router>
        </div>
    );
  }
}
export default App;
