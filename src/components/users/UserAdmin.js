import React, { Component, Fragment } from 'react';
import User from './User';
import './Users.css';
import axios from "axios";
const config = require('../../config.json');

export default class UserAdmin extends Component {

  state = {
    newuser: { 
      "username": "", 
      "id": ""
    },
    users: []
  }

  handleAddUser = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway add user endpoint here
    try {
      const params = {
        "id": id,
        "username": this.state.newuser.username
      };
      await axios.post(`${config.api.invokeUrl}/armchair-users/${id}`, params);
      this.setState({ users: [...this.state.users, this.state.newuser] });
      this.setState({ newuser: { "username": "", "id": "" }});
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  handleUpdateUser = async (id, name) => {
    // add call to AWS API Gateway update user endpoint here
    try {
      const params = {
        "id": id,
        "username": name
      };
      await axios.patch(`${config.api.invokeUrl}/armchair-users/${id}`, params);
      const userToUpdate = [...this.state.users].find(user => user.id === id);
      const updatedUsers = [...this.state.users].filter(user => user.id !== id);
      userToUpdate.username = name;
      updatedUsers.push(userToUpdate);
      this.setState({users: updatedUsers});
    }catch (err) {
      console.log(`Error updating user: ${err}`);
    }
  }

  handleDeleteUser = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete user endpoint here
    try {
      await axios.delete(`${config.api.invokeUrl}/armchair-users/${id}`);
      const updatedUsers = [...this.state.users].filter(user => user.id !== id);
      this.setState({users: updatedUsers});
    }catch (err) {
      console.log(`Unable to delete user: ${err}`);
    }
  }

  fetchUsers = async () => {
    //   call to AWS API Gateway to fetch users  then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/armchair-users`);
      const users = res.data;
      this.setState({ users: users });
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  onAddUserNameChange = event => this.setState({ newuser: { ...this.state.newuser, "username": event.target.value } });
  onAddUserIdChange = event => this.setState({ newuser: { ...this.state.newuser, "id": event.target.value } });

  componentDidMount = () => {
    this.fetchUsers();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>User Admin</h1>
            <hr />
            <p className="subtitle is-5">Add and remove users using AWS DynamoDB persistant storage:</p>
            <br />
            <div className="columns">
              <div className="column is-one-third">
                <form onSubmit={event => this.handleAddUser(this.state.newuser.id, event)}>
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.newuser.username}
                        onChange={this.onAddUserNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter id"
                        value={this.state.newuser.id}
                        onChange={this.onAddUserIdChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-info is-medium">
                        Add user
                      </button>
                    </div>
                  </div>
                </form>
              </div> 
              
              <div className=" column is-two-thirds panels">
                {/* <d/iv className="tile is-ancestor "> */}
                  <div className="tile is-4 is-parent   is-vertical">
                    { 
                      this.state.users.map((user, index) => 
                        <User 
                          isAdmin={true}
                          handleUpdateUser={this.handleUpdateUser}
                          handleDeleteUser={this.handleDeleteUser} 
                          name={user.username} 
                          id={user.id}
                          key={user.id}
                        />)
                    }
                  </div>
                {/* </div> */}
              </div>
            </div>

          </div>
        </section>
      </Fragment>
    )
  }
}
