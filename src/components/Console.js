import React, { Component } from 'react'; 
import AddCoin from './AddCoin';
import Trackers from './Trackers';
import uuid from 'uuid';
import axios from 'axios';
import {coins} from '../db.json'; 

export class Console extends Component {
 
  constructor(){
    super()

    this.state = {  // local data overwritten by Mock api
    trackers:coins,
    trackersAPI: []
  };
 }

    
      // Track/Not Track
  trackThis = (id) => {
    console.log(id + ' tracked! ..from App.js');
    this.setState({
      trackers: this.state.trackers.map(tracker => {
        if (tracker.id === id) {
          tracker.tracking = !tracker.tracking;
        }
        return tracker;
      })
    });
  };

  // Delete Coin (Tracking)
  delCoin = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          trackers: [...this.state.trackers.filter(tracker => tracker.id !== id)]
        })
      );
    console.log('delcoin:  ' + id);
  };

  // Add New Coin Type (not default tracking)
  addCoin = (title, symbol) => {
    const newCoin = {
      id: uuid.v4(),
      title: title,
      symbol: symbol,
      tracking: false
    }
    console.log(symbol + ': symbol', title + ': title');
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then((res) => {
        res.data.id = uuid.v4();
        this.setState({ trackers: [...this.state.trackers, newCoin] });
      });
  };
 
    render() { 
      return (
            <div  >
           <h2>CONSOLE</h2>  
            </div>
        );
    }
  render=() => (
                <React.Fragment>
                  <AddCoin addCoin={this.addCoin} />
                  <Trackers trackers={this.state.trackers} trackThis={this.trackThis} delCoin={this.delCoin} />
                </React.Fragment>
              )

}
  
 
export default Console;
