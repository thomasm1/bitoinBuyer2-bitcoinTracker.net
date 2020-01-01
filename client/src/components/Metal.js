import React, { Component, Fragment }  from 'react';

export default class MetalAdmin extends Component {

  state = {
    isEditMode: false,
    updatedmetalname: this.props.name
  }

  handleMetalEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateMetal(this.props.id, this.state.updatedmetalname);
  }

  onAddMetalNameChange = event => this.setState({ "updatedmetalname": event.target.value });

  render() {
    return (
        <div className="box metal-card notification is-success">
          {
            this.props.isAdmin && 
            <Fragment>
              <button onClick={event => this.props.handleDeleteMetal(this.props.id, event)} className="delete"></button>
            </Fragment>
          }
          {
            this.state.isEditMode 
            ? <div>
                <p>Edit metal name</p>
                <input 
                  className="input is-medium"
                  type="text" 
                  placeholder="Enter name"
                  value={this.state.updatedmetalname}
                  onChange={this.onAddMetalNameChange}
                />
                <p className="metal-id">id: { this.props.id }</p>
                <button type="submit" 
                  className="button is-info is-small"
                  onClick={ this.handleEditSave }
                >save</button>
              </div>
            : <div>
                <p className="metal-title">{this.props.firstname } {this.props.lastname }</p>
                <p className="metal-id">genre: { this.props.genre }</p>
              </div>
          }
      </div>
    )
  }
}
