import React, { Component } from "react";
import Axios from "axios";
import ListingCard from "./listingcard";

class Userlistings extends Component {
  state = {
    userlistings: []
  }

  // When component mounts
  componentDidMount() {
    // Axios get from back end
    Axios
      .get(
        "/api/userlisting"
      )
      .then(res => {
        const userlistings = res.data;
        // Data from back end set as state
        this.setState({ userlistings: userlistings })
      }).catch((err) => {
        console.log(err)
      })
  }

  updateList = (id) => {
    window.location.href = window.location.href + "/updatelisting/" + id
  }

  deleteList = (id) => {
    Axios
      .delete
      (
        "/api/userlisting/" + id
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    // Map through all the userlistings
    const singlelisting = this.state.userlistings.map(listing => {
      return (
        <ListingCard
          id={listing._id}
          make={listing.make}
          model={listing.model}
          year={listing.year}
          update={this.updateList}
          delete={this.deleteList}
        />
      )
    })
    return (
      <div className="row">
        {/* WILL GET AN ERROR FROM THE BACK END IF LINE 39 WORKS */}
        {singlelisting}
      </div>
    )
  }
}

export default Userlistings;