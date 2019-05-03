import React, { Component } from "react";
import Axios from "axios";
import FavCard from "./favcard";

class Favlistings extends Component {
  state = {
    favoritedlistings: []
  }

  componentDidMount() {
    Axios
      .get(
        "/api/listings"
      )
      .then(res => {
        const favoritedlistings = res.data;
        this.setState({ favoritedlistings: favoritedlistings })
      }).catch((err) => {
        console.log(err)
      })
  }



  render() {
    const singlelisting = this.state.favoritedlistings.map(listing => {
      return (
        <FavCard
          id={listing.id}
          key={listing.id}
          make={listing.make}
          model={listing.model}
          year={listing.year}
          mileageMile={listing.mileageMile}
          mileageKm={listing.mileageKm}
        />
      )
    })
    return (
      <div className="row">
        {singlelisting}
      </div>
    )
  }
}

export default Favlistings;