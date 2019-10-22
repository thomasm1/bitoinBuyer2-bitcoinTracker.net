import React, { Component } from 'react';
import CoinTracker from './CoinTracker';
import PropTypes from 'prop-types';
import './Trackers.css';

class Trackers extends Component { 
    render() {
        return this.props.trackers.slice(0).reverse().map((tracker) => (
            <CoinTracker 
            key={tracker.id} 
            tracker={tracker} 
            trackThis={this.props.trackThis} 
            delCoin={this.props.delCoin} 
            checkbox={this.props.checkbox}
            />
        ));     
    }
}

Trackers.propTypes = {
    trackers: PropTypes.array.isRequired,
    trackThis: PropTypes.func.isRequired,
    delCoin: PropTypes.func.isRequired
}

export default Trackers;
