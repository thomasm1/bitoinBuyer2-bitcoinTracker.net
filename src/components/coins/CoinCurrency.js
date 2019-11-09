import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CoinAdmin extends Component {

  state = {
    isEditMode: false,
    updatedcoinname: this.props.name
  }

  handleCoinEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateCoin(this.props.id, this.state.updatedcoinname);
  }

  onAddCoinNameChange = event => this.setState({ "updatedcoinname": event.target.value });

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleCoinEdit} className="coin-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            <button onClick={event => this.props.handleDeleteCoin(this.props.id, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit coin name</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter name"
                value={this.state.updatedcoinname}
                onChange={this.onAddCoinNameChange}
              />
              <p className="coin-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
              <p className="coin-title">{ this.props.name }</p>
              <p className="coin-id">id: { this.props.id }</p>
            </div>
        }
      </div>
    )
  }
}