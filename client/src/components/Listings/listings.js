import React, { Component } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Listings extends Component {
  // state = {
  //   url: ""
  // }

  gotocar = () => {
    window.location.href = "/" + this.props.id;
    // this.setState({ url: "/" + this.props.id })
  }

  render() {
    const images = [this.props.images
      //   "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2018-BMW-M4-110.jpg?fill=2:1&resize=980:*",
      //   "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/dinan-s1-bmw-m4-instrumented-test-review-car-and-driver-photo-662862-s-original.jpg",
      //   "https://acd27e678d077c01a703-8687be8436127d2a9934ef3f865789b4.ssl.cf1.rackcdn.com/WBS4S9C57GK578711/a321a2039c219bfdffa04310ef4ac101.jpg"
    ];
    // console.log(images);
    // console.log(this.props.images.splice(0-5));
    const displayImg = this.props.images.splice(0 - 5).map(image => {
      return <div key={this.props.id}>
        <img src={image} />
      </div>
    })

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })

    // console.log(displayImg);
    return (
      <div className="card" onClick={this.gotocar} >

        <Carousel>
          {displayImg}
          {/* <div>
        <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2018-BMW-M4-110.jpg?fill=2:1&resize=980:*" />
      </div>
      <div>
        <img src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/dinan-s1-bmw-m4-instrumented-test-review-car-and-driver-photo-662862-s-original.jpg" />
      </div>
      <div>
        <img src="https://acd27e678d077c01a703-8687be8436127d2a9934ef3f865789b4.ssl.cf1.rackcdn.com/WBS4S9C57GK578711/a321a2039c219bfdffa04310ef4ac101.jpg" />
      </div> */}
        </Carousel>

        <div className="card-body">

          <p>{this.props.year} {this.props.make} {this.props.model}</p>
          <p>{formatter.format(this.props.price)}</p>
        </div>
      </div>
    )
  }
}
{/* <ul>
<li>{this.props.id}</li>
<li>{this.props.name}</li>
</ul> */}


//   <ul>
//   <li>{this.props.year} {this.props.make} {this.props.model}</li>
//   <li>{this.props.price}</li>
// </ul>
export default Listings;