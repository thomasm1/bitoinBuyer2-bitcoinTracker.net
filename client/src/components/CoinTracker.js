import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './CoinTracker.css';


export class CoinTracker extends Component {
    getTrackerStyle = () => {
        return {
           // backgroundColor: 'aliceblue',
            padding: '5px',
            marginTop: '5px',
            border: this.props.tracker.netPositive ? 'solid 2px #002c0091' : 'solid 2px #ff00009e', 
            backgroundColor: this.props.tracker.tracking ? 'rgba(141, 213, 236, 0.5)' : 'rgba(119, 136, 153, 0.5)'
        }
    } 

    getLetterStyle = () => {
        return {
              color: this.props.tracker.netPositive ? 'green' : '#ff00009e', 
        }
    }
    getTrackerChecked = () => {
        return this.props.tracker.tracking?true:false;
    }
   //1 trackThis(e) {
    //2 trackThis = (e) => {  console.log(this.props)}

    render() {

        const { id, title, symbol, netPositive, date, close, open, high, low } = this.props.tracker;
      return (
            <div style={this.getTrackerStyle()}>
                <p>
                    <input type="checkbox"  defaultChecked={this.getTrackerChecked()} onChange={this.props.trackThis.bind(this, id)} />  &nbsp;&nbsp;<strong>{title} {'  '} {'  ('}{symbol}{')  '}</strong>&nbsp;{' | '}&nbsp;  <strong>{'Price: '}</strong> {close}    <br /> 

                    <strong>{'Recent Statistics: '}</strong> &nbsp;   
                    <strong>{'Date: '}</strong> {date} &nbsp;{' | '}&nbsp;  
                    <strong>{'Net Gain: '}</strong> <span style={this.getLetterStyle()}>{netPositive? ' Positive': ' Negative'} </span> <br />
                    <strong>{'Open: '}</strong> {open} &nbsp;{' | '}&nbsp; 
                    <strong>{'Close: '}</strong> {close}  &nbsp;{' | '}&nbsp; 
                    <strong>{'Low: '}</strong> {low}  &nbsp;{' | '}&nbsp; 
                    <strong>{'High: '}</strong> {high} 
                    <button onClick={this.props.delCoin.bind(this, id)} style={btnStyle}> x </button>
                </p> 
            </div>
        );
    }
}

CoinTracker.propTypes = {
    tracker: PropTypes.object.isRequired
}

const btnStyle= {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px', 
    cursor: 'pointer',
    float: 'right'
}

//1  <input type="checkbox" onChange={this.trackThis.bind(this)} /> {' '}

// const trackerStyle = {
//     backgroundColor:'aliceblue'
// }
export default CoinTracker;
