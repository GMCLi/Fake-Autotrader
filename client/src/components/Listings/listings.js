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

class Listings extends Component {
  state = {
    vehInfo: []
  };

  gotocar = () => {
    console.log(this.event);
    window.location.href = "/" + this.props.id;
    this.setState({ vehInfo: this.props });
  };

  render() {
    const displayImg = this.props.images.splice(0 - 5).map(image => {
      return (
        <div key={this.props.id}>
          <img src={image} alt={this.props} />
        </div>
      );
    });

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    });

    return (
      <div className="listingcard" style={styles.card}>
        <Carousel>{displayImg}</Carousel>
        <div className="card-body">
          <p>
            {this.props.year} {this.props.make} {this.props.model}
          </p>
          <p>{formatter.format(this.props.price)}</p>
          <button className="listingviewbtn" onClick={this.gotocar}>
            View This Listing
          </button>
        </div>
      </div>
    );
  }
}

export default Listings;
