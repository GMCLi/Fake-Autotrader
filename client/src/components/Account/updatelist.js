import React, { Component } from "react";
import Axios from "axios";

class UpdateListing extends Component {
  state = {
    // Listing Object
    listing: [],
    make: "",
    model: "",
    year: ""
  }

  componentDidMount() {
    // Axios get from back end
    console.log(this.props.match.params.id)
    Axios
      .get(
        "/api/userlisting/" + this.props.match.params.id
      )
      .then(res => {
        const listing = res.data;
        // Data from back end set as state
        this.setState({ listing: listing })
      }).catch((err) => {
        console.log(err)
      })
  }

  updateListing = (event) => {
    event.preventDefault();
    const listing = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year
    }
    Axios
      .put
      (
        "/api/userlisting/" + this.props.match.params.id, { listing }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  makeChange = evt => {
    this.setState({ make: evt.target.value })
  }

  modelChange = evt => {
    this.setState({ model: evt.target.value })
  }

  yearChange = evt => {
    this.setState({ year: evt.target.value })
  }

  render() {
    return (
      <div>
        {/* Form to fill out listing info */}
        <form>
          <div className="form-group make">
            <label for="make">Make</label>
            <input type="text" className="form-control" placeholder={this.state.listing.make} onChange={this.makeChange} id="make" />
          </div>
          <div className="form-group model">
            <label for="model">Model</label>
            <input type="text" className="form-control" placeholder={this.state.listing.model} onChange={this.modelChange} id="model" />
          </div>
          <div className="form-group year">
            <label for="year">Year</label>
            <input type="text" className="form-control" placeholder={this.state.listing.year} onChange={this.yearChange} id="year" />
          </div>
          <button className="updateBtn btn" onClick={this.updateListing}>Update Your Listing</button>
        </form>
      </div>
    )
  }
}

export default UpdateListing;