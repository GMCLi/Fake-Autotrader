import React, { Component } from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const styles = {
  card: {
    borderStyle: "inset",
    margin: "25",
    position: "center"
  }
};

class FavCard extends Component {
  state = {
    vehInfo: []
  };

  gotocar = () => {
    console.log(window.location)
    window.location.href = window.location.origin + "/" + this.props.id;
  };

  render() {
    // Number formatter for mileages
    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0
    });
    // const displayImg = this.props.images.splice(0 - 5).map(image => {
    //   return (
    //     <div key={this.props.id}>
    //       <img src={image} alt={this.props} className="listing-img" />
    //     </div>
    //   );
    // });

    // const formatter = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    //   minimumFractionDigits: 0
    // });
    return (

      <div className="card">
        <div className="cardbody">
          <p>Make: {this.props.make}</p>
          <p>Model: {this.props.model}</p>
          <p>Year: {this.props.year}</p>
          <p>Mileage (miles): {formatter.format(this.props.mileageMile)}</p>
          <p>Mileage (km): {formatter.format(this.props.mileageKm)}</p>
          <button className="listingviewbtn" onClick={this.gotocar}>
            View This Listing
          </button>
        </div>
      </div>
    );
  }
}

export default FavCard;
