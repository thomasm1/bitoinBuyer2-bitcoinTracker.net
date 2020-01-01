import React, { Component, Fragment } from 'react';
import Metal from './Metal';
import axios from "axios";

export default class MetalsAdmin extends Component {

  state = {
    newmetal: { 
      firstName: "",
      lastName: "",
      genre: ""
    },
    metals: []
  }

  outputHTML = "";

  handleAddMetal = async(id, event) => {
    event.preventDefault();
    try {
      await axios.put(`/metal/${id}`, this.state.newmetal);
      this.setState({ metals: [...this.state.metals, this.state.newmetal] });
      this.setState({ newmetal: { "firstName": "", "lastName": "", "genre": "" }});
    }catch(err) {
      console.log(err);
    }
  }

  handleUpdateMetal = (id, name) => {
    // ? upcoming HERE
    
    // ID == firstName

    // add call to AWS API Gateway update metal endpoint here
    const metalToUpdate = [...this.state.metals].find(metal => metal.id === id);
    const updatedMetals = [...this.state.metals].filter(metal => metal.id !== id);
    metalToUpdate.metalname = name;
    updatedMetals.push(metalToUpdate);
    this.setState({metals: updatedMetals});
  }

  handleDeleteMetal = async(id, event) => {

    // ID == firstName
    // using firstName as the id in metals state
    event.preventDefault();
    try {
      await axios.delete(`/metal/${id}`);
      const updatedMetals = await [...this.state.metals].filter(metal => metal.firstName.toLowerCase() !== id);
      this.setState({metals: updatedMetals});
    }catch(err) {
      console.log(err);
    }
  }

  fetchMetals = async() => {
    try{
      const res = await axios.get('/metal/all');
      const allMetals = Object.keys(res.data).map((key) => {
        return res.data[key];
      });
      this.setState({ metals: [...allMetals] });
    }catch(err) {
      console.log(err);
    }
  }

  onAddMetalFirstNameChange = event => this.setState({ newmetal: { ...this.state.newmetal, "firstName": event.target.value } });
  onAddMetalLastNameChange = event => this.setState({ newmetal: { ...this.state.newmetal, "lastName": event.target.value } });
  onAddMetalGenreChange = event => this.setState({ newmetal: { ...this.state.newmetal, "genre": event.target.value } });

  componentDidMount = () => {
    this.fetchMetals();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <p className="subtitle is-5">Add and remove metals using the form below:</p>
            <p className=" ">Local Development &amp; View Only</p>
            <br />
            <div className="columns">
              <div className="column is-one-third">
                <form onSubmit={event => this.handleAddMetal(this.state.newmetal.firstName.toLowerCase(), event)}>
                  <div className="field">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.newmetal.firstName}
                        onChange={this.onAddMetalFirstNameChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter material"
                        value={this.state.newmetal.lastName}
                        onChange={this.onAddMetalLastNameChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter type"
                        value={this.state.newmetal.genre}
                        onChange={this.onAddMetalGenreChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-primary is-medium">
                        Add metal
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-two-thirds">
                {
                  this.state.metals.map((metal, index) =>
                    <Metal
                        isAdmin={true}
                        handleUpdateMetal={this.handleUpdateMetal}
                        handleDeleteMetal={this.handleDeleteMetal}
                        firstname={metal.firstName}
                        lastname={metal.lastName}
                        genre={metal.genre}
                        key={metal.lastName.toLowerCase()}
                        id={metal.firstName.toLowerCase()}
                        index={index}
                      />
                  )}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
