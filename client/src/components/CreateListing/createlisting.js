import React, { Component } from "react";
import Axios from "axios";

class CreateListing extends Component {
  state = {
    // Listing Object
    listingMake: [],
    listingModel: [],
    listingYear: []
  }

  // Set state by form input
  setMake = evt => {
    evt.preventDefault();
    this.setState({ listingMake: evt.target.value })
  }
  setModel = evt => {
    evt.preventDefault();
    this.setState({ listingModel: evt.target.value })
  }
  setYear = evt => {
    evt.preventDefault();
    this.setState({ listingYear: evt.target.value })
  }

  // Send to back end
  createListing = event => {
    event.preventDefault();
    // Create object from state
    const listing = {
      make: this.state.listingMake,
      model: this.state.listingModel,
      year: this.state.listingYear
    }
    console.log(listing);
    // Send to back end
    Axios
      .post(
        "/api/userlisting", { listing }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        {/* Form to fill out listing info */}
        <form>
          <div className="form-group make">
            <label for="make">Make</label>
            <input type="text" className="form-control" onChange={this.setMake} id="make" />
          </div>
          <div className="form-group model">
            <label for="model">Model</label>
            <input type="text" className="form-control" onChange={this.setModel} id="model" />
          </div>
          <div className="form-group year">
            <label for="year">Year</label>
            <input type="text" className="form-control" onChange={this.setYear} id="year" />
          </div>
          <button className="createBtn btn" onClick={this.createListing}>Post Your Vehicle</button>
        </form>
      </div>
    )
  }
}

export default CreateListing;