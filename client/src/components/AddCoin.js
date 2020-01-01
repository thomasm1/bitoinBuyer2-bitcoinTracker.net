import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddCoin extends Component {
    state = {
        symbol: '',
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCoin(this.state.title, this.state.symbol);
        this.setState({ title: '', symbol: '' });
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // make into options selection dropdown!!
    render() {

        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input
                    type="text"
                    name="symbol"
                    placeholder="Add Coin Tracker (Symbol)..."
                    style={{ flex: '5', padding: '4px' }}
                    value={this.state.symbol}
                    onChange={this.onChange} /> 
                    <input
                    type="text"
                    name="title"
                    placeholder="Add Coin Tracker (Name) ..."
                    style={{ flex: '5', padding: '4px' }}
                    value={this.state.title}
                    onChange={this.onChange} />
                <input
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{ flex: '1' }} />
            </form>
        )
    }
}
 
AddCoin.propTypes = {
    addCoin: PropTypes.func.isRequired
  }
  
export default AddCoin