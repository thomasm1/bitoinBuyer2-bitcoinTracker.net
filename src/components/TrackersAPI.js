import React, { Component } from 'react';
import CoinTracker from './CoinTracker';
import PropTypes from 'prop-types'; 

class TrackersAPI extends Component { 
    render() {
        return this.props.trackersAPI.slice(0).reverse().map((trackerAPI) => (
            <CoinTracker 
            key={trackerAPI.id} 
            trackerAPI={trackerAPI} 
            trackThis={this.props.trackThis} 
            delCoin={this.props.delCoin} 
            checkbox={this.props.checkbox}
            />
        ));     
    }
}

TrackersAPI.propTypes = {
    trackersAPI: PropTypes.array.isRequired,
    trackThis: PropTypes.func.isRequired,
    delCoin: PropTypes.func.isRequired
}

export default TrackersAPI;
