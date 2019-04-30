import React, { Component } from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
// import { Button, Collapse } from "react-bootstrap";

//Market API Key - MAKE IT UNACCESSABLE FOR PEOPLE! - WILL THIS MAKE THE APP UNUSABLE?
const marketAPIKey = "A5IT88Qvj3I0haACL4WW3lIHBwA2oPQE";

class VehDetails extends Component {
  state = {
    listing: [],
    images: [],
    make: "",
    model: "",
    year: "",
    mileageMile: "",
    mileageKm: "",
    exteriorcolor: "",
    interiorcolor: "",
    dealerinfo: [],
    features: [],
    exteriorfeatures: [],
    standardfeatures: [],
    interiorfeatures: [],
    safetyfeatures: [],
    dealershipwebsite: []
  };

  // constructor(props, context) {
  //   super(props, context);

  //   this.state = { open: false };
  // }

  // toggle() {
  //   this.setState(state => ({ collaspe: !state.collapse }));
  // }

  componentDidMount() {
    //"https://jsonplaceholder.typicode.com/users"
    axios
      .get(
        "https://marketcheck-prod.apigee.net/v1/listing" +
        this.props.location.pathname +
        "?api_key=" +
        marketAPIKey
      ) //"https://marketcheck-prod.apigee.net/v1/search?api_key=" + marketAPIKey + "&seller_type=dealer&make=" + makeSearch
      .then(res => {
        console.log(res.data);
        const listing = res.data; //.listings
        this.setState({ listing: listing }); // Full details in this.state.listing
        this.setState({ images: res.data.media.photo_links }); // Images
        this.setState({ make: res.data.build.make }); // Make
        this.setState({ model: res.data.build.model }); // Model
        this.setState({ year: res.data.build.year }); // Year
        this.setState({ mileageMile: res.data.miles }); // Mileage in Miles
        const milesKm = res.data.miles / 0.62137; // Converter from miles to KM
        this.setState({ mileageKm: milesKm }); // Mileage in KM
        this.setState({ exteriorcolor: res.data.exterior_color }); // Exterior color
        // this.setState({ interiorcolor: interior_color }) // Interior color
        this.setState({ dealerinfo: res.data.dealer }); // Dealership info
        this.setState({ features: res.data.extra.features }); // Extra features
        this.setState({ exteriorfeatures: res.data.extra.exterior_f }); // Exterior features
        this.setState({ standardfeatures: res.data.extra.standard_f }); // Standard features
        this.setState({ interiorfeatures: res.data.extra.interior_f }); // Interior features
        this.setState({ safetyfeatures: res.data.extra.safety_f }); // Safety features
        this.setState({ dealershipwebsite: res.data.dealer.website }); // Dealership information
      });
  }
  // Gen features map if it exists
  genFeat() {
    if (this.state.features === undefined) {
      return <h5>No Listed Features</h5>;
    } else {
      return this.state.features.map(features => <li>{features}</li>);
    }
  }

  // Ext features map if it exists
  extFeat() {
    if (this.state.exteriorfeatures === undefined) {
      return <h5>No Listed Exterior Features</h5>;
    } else {
      return this.state.exteriorfeatures.map(features => <li>{features}</li>);
    }
  }

  // Sta features map if it exists
  staFeat() {
    if (this.state.standardfeatures === undefined) {
      return <h5>No Listed Standard Features</h5>;
    } else {
      return this.state.standardfeatures.map(features => <li>{features}</li>);
    }
  }

  // Int features map if it exists
  intFeat() {
    if (this.state.interiorfeatures === undefined) {
      return <h5>No Listed Interior Features</h5>;
    } else {
      return this.state.interiorfeatures.map(features => <li>{features}</li>);
    }
  }

  // Int features map if it exists
  safeFeat() {
    if (this.state.interiorfeatures === undefined) {
      return <h5>No Listed Safety Features</h5>;
    } else {
      return this.state.safetyfeatures.map(features => <li>{features}</li>);
    }
  }

  dealerRelocate = () => {
    window.location.assign("https://" + this.state.dealershipwebsite)
  }

  downPay() {
    window.location.href = window.location.href + "/downpay";
  }

  render() {
    // Number formatter for mileages
    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0
    });

    // Image map for carousel
    const displayImg = this.state.images.map(image => {
      return (
        <div key={this.state.listing.id}>
          <img src={image} alt={this.props} />
        </div>
      );
    });

    // // Mechanism for collapsing cards
    // const { open } = this.state;


    return (
      <div>
        {/* Row for carousel */}
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <Carousel>{displayImg}</Carousel>
            </div>
          </div>
        </div>

        {/* Row for general info */}
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h3>General Information</h3>
                <p>Make: {this.state.make}</p>
                <p>Model: {this.state.model}</p>
                <p>Year: {this.state.year}</p>
                <p>Mileage in Km: {formatter.format(this.state.mileageKm)}</p>
                <p>Mileage in Miles: {this.state.mileageMile}</p>
                <button className="dealerBtn" onClick={this.dealerRelocate}>
                  Go To The Dealership's Website
                </button>
                <button className="downpayBtn" onClick={this.downPay}>
                  Put A Down Payment Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Row */}
        <div className="row features ">
          {/* Column for general features */}
          <div className="col-sm-4">
            <div className="card">
              {/* <button onClick={() => this.setState({ open: !open })}
                aria-controls="genfeatCollapse"
                aria-expanded={open}>
                Features
              </button> */}
              {/* <Collapse in={this.state.open}> */}
              <div className="card-body">
                <h3>General Features</h3>
                <ul>
                  <li>{this.genFeat()}</li>
                </ul>
              </div>
              {/* </Collapse> */}
            </div>
          </div>
          {/* Column for exterior features */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3>Exterior Features</h3>
                <ul>{this.extFeat()}</ul>
              </div>
            </div>
          </div>
          {/* Column for standard features */}
          <div className="col-sm-4">
            <div className="card">
              {/* <Button onClick={() => this.setState({ open: !open })} aria-controls="standardData" aria-expanded={open}>Standard Features</Button>
              <Collapse in={this.state.open}> */}
              <div className="card-body" id="standardData">
                <ul>
                  <h3>Standard Features</h3>
                  {this.staFeat()}
                </ul>
              </div>
              {/* </Collapse> */}
            </div>
          </div>
        </div>

        {/* Feature Row 2*/}
        <div className="row features ">
          {/* Column for general features */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3>Interior Features</h3>
                <ul>
                  <li>{this.intFeat()}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Column for exterior features */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3>Safety Features</h3>
                <ul>{this.safeFeat()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehDetails;
