import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class User extends Component {

  state = {
    isEditMode: false,
    updatedusername: this.props.name
  }

  handleUserEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateUser(this.props.id, this.state.updatedusername);
  }

  onAddUserNameChange = event => this.setState({ "updatedusername": event.target.value });

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleUserEdit} className="user-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            <button onClick={event => this.props.handleDeleteUser(this.props.id, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit user name</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter username"
                value={this.state.updatedusername}
                onChange={this.onAddUserNameChange}
              />
              <p className="user-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
              <p className="user-title">{ this.props.name }</p>
              <p className="user-id">id: { this.props.id }</p>
            </div>
        }
      </div>
    )
  }
}