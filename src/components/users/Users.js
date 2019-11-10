import React, { Component, Fragment } from 'react';
import User from './User';
import axios from "axios";
const config = require('../../config.json');

export default class Users extends Component {

  state = {
    newuser: null,
    users: []
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

  componentDidMount = () => {
    this.fetchUsers();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Membership Types</h1>
            <p className="subtitle is-5">Invest in a better future with tailored, informed and targeted crypto-research:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.users && this.state.users.length > 0
                      ? this.state.users.map(user => <User name={user.username} id={user.id} key={user.id} />)
                      : <div className="tile notification is-warning">No users available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
