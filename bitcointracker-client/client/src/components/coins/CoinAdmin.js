import React, { Component, Fragment } from 'react';
import Coin from './Coin';
import axios from "axios";
const config = require('../config.json');

export default class CoinAdmin extends Component {

  state = {
    newcoin: { 
      "coinname": "", 
      "id": ""
    },
    coins: []
  }

  handleAddCoin = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway add coin endpoint here
    try {
      const params = {
        "id": id,
        "coinname": this.state.newcoin.coinname
      };
      await axios.post(`${config.api.invokeUrl}/coins/${id}`, params);
      this.setState({ coins: [...this.state.coins, this.state.newcoin] });
      this.setState({ newcoin: { "coinname": "", "id": "" }});
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  handleUpdateCoin = async (id, name) => {
    // add call to AWS API Gateway update coin endpoint here
    try {
      const params = {
        "id": id,
        "coinname": name
      };
      await axios.patch(`${config.api.invokeUrl}/coins/${id}`, params);
      const coinToUpdate = [...this.state.coins].find(coin => coin.id === id);
      const updatedCoins = [...this.state.coins].filter(coin => coin.id !== id);
      coinToUpdate.coinname = name;
      updatedCoins.push(coinToUpdate);
      this.setState({coins: updatedCoins});
    }catch (err) {
      console.log(`Error updating coin: ${err}`);
    }
  }

  handleDeleteCoin = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete coin endpoint here
    try {
      await axios.delete(`${config.api.invokeUrl}/coins/${id}`);
      const updatedCoins = [...this.state.coins].filter(coin => coin.id !== id);
      this.setState({coins: updatedCoins});
    }catch (err) {
      console.log(`Unable to delete coin: ${err}`);
    }
  }

  fetchCoins = async () => {
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

  onAddCoinNameChange = event => this.setState({ newcoin: { ...this.state.newcoin, "coinname": event.target.value } });
  onAddCoinIdChange = event => this.setState({ newcoin: { ...this.state.newcoin, "id": event.target.value } });

  componentDidMount = () => {
    this.fetchCoins();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Coin Admin</h1>
            <p className="subtitle is-5">Add and remove coins using the form below:</p>
            <br />
            <div className="columns">
              <div className="column is-one-third">
                <form onSubmit={event => this.handleAddCoin(this.state.newcoin.id, event)}>
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.newcoin.coinname}
                        onChange={this.onAddCoinNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter id"
                        value={this.state.newcoin.id}
                        onChange={this.onAddCoinIdChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-primary is-medium">
                        Add coin
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-two-thirds">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.coins.map((coin, index) => 
                        <Coin 
                          isAdmin={true}
                          handleUpdateCoin={this.handleUpdateCoin}
                          handleDeleteCoin={this.handleDeleteCoin} 
                          name={coin.coinname} 
                          id={coin.id}
                          key={coin.id}
                        />)
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
