import React, { Component, Fragment } from 'react';
import Coin from './Coin';
import axios from "axios";
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newcoin: null,
    coins: []
  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch coins here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/coins`);
      const coins = res.data;
      this.setState({ coins: coins });
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Membership Types</h1>
            <p className="subtitle is-5">Invest in a better future with tailored, informed and targeted research:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.coins && this.state.coins.length > 0
                      ? this.state.coins.map(coin => <Coin name={coin.coinname} id={coin.id} key={coin.id} />)
                      : <div className="tile notification is-warning">No coins available</div>
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
