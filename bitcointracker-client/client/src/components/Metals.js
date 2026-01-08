import React, { Component, Fragment } from 'react';
import Metal from './Metal';
import axios from "axios";
// const config = require('../config.json');
const config = require('../config-aws.json');

export default class Metals extends Component {

  state = {
    newmetal: null,
    metals: []
  }

  fetchMetals = () => {
    // soon ....
    // add call to AWS API Gateway to fetch metals here
    // then set them in state
  }

  componentDidMount = () => {
    this.fetchMetals();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Energy Metals</h1>
            <p className="subtitle is-5">See into a future with blockchain-guaranteed, efficient and cost-effective 'green' metals:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                    { 
                      this.state.metals && this.state.metals.length > 0
                      ? this.state.metals.map(metal => <Metal name={metal.metalname} id={metal.id} key={metal.id} />)
                      : <div className="tile notification is-warning">No metals available</div>
                    }
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
