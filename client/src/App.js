import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Listings from "./components/Listings/listings";
import Articles from "./components/Articles/articles";
import VehDetails from "./components/VehDetails/vehdetails";
import Form from "./components/CreditcardForm/Form";
import Admin from "./components/Admin/Admin";
import Account from "./components/Account/account";
import Favlistings from "./components/Account/favlistings";
import Favarticles from "./components/Account/favarticles";
import Userlistings from "./components/Account/userlistings";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import Jumbotron from "react-bootstrap/Jumbotron";

//Market API Key - MAKE IT UNACCESSABLE FOR PEOPLE! - WILL THIS MAKE THE APP UNUSABLE?
const marketAPIKey = "A5IT88Qvj3I0haACL4WW3lIHBwA2oPQE";

class App extends Component {
  state = {
    //user Authentication Data
    user: {},
    //State - user signed in or not
    signedIn: false,
    //Empty Array For Listings To Be Filled By Axios GET Request
    listings: [],
    //User input Make
    makeSearch: "",
    //User input Model
    modelSearch: "",
    //User input Year
    yearSearch: "",
    //Autocomplete Data
    autocomplete: []

  };

  // componentDidMount() {
  //"https://jsonplaceholder.typicode.com/users"
  handleSearch = event => {
    event.preventDefault();
    axios
      .get(
        // Request URL
        "https://marketcheck-prod.apigee.net/v1/search?api_key=" +
          // API Key
          marketAPIKey +
          // Make
          "&seller_type=dealer&make=" +
          this.state.makeSearch +
          // Model
          "&model=" +
          this.state.modelSearch +
          // Year
          "&year=" +
          this.state.yearSearch +
          // 25 listings
          "&rows=25"
      ) //"https://marketcheck-prod.apigee.net/v1/search?api_key=" + marketAPIKey + "&seller_type=dealer&make=" + makeSearch
      .then(res => {
        // console.log(res.data)
        const listings = res.data.listings; //.listings
        this.setState({ listings });
      });
  };
  setUser = user => {
    this.setState({ user });
  };

  // // Get autocomplete data from url
  // auto = () => {
  //   axios.get(
  //     // Request URL
  //     "https://marketcheck-prod.apigee.net/v1/search/auto-complete?api_key=" +
  //     // API Key + year make model field
  //     marketAPIKey + "field=ymm&input="
  //     // Input letter

  //   )
  // }


  // Update state makeSearch with user input
  updatemakeSearch = evt => {
    evt.preventDefault();
    this.setState({ makeSearch: evt.target.value });
  };

  // Update state modelSearch with user input
  updatemodelSearch = evt => {
    evt.preventDefault();
    this.setState({ modelSearch: evt.target.value });
  };

  // Update state yearSearch with user input
  updateyearSearch = evt => {
    evt.preventDefault();
    this.setState({ yearSearch: evt.target.value });
  };

  render() {
    // Map through the listings
    const singlelisting = this.state.listings.map(listing => {
      // return <Listings key={listing} id={listing.id} name={listing.name} username={listing.username} />
      return (
        <Listings
          id={listing.id}
          key={listing.id}
          year={listing.build.year}
          make={listing.build.make}
          model={listing.build.model}
          price={listing.ref_price}
          images={listing.media.photo_links}
        />
      );
    });

    return (
      <div className="App">
        <Router>
          <Navbar setUser={this.setUser} />
          <Jumbotron
            style={{
              height: "50vmin",
              backgroundImage:
                "url(" +
                "https://wpblink.com/sites/default/files/wallpaper/motors/71830/old-car-wallpapers-hd-71830-431447.png" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              margin: "0"
            }}
          >
            <h3
              style={{
                color: "rgb(124,29,30)",
                textAlign: "left"
              }}
            >
              Search Cars and Suv`s
            </h3>
          </Jumbotron>

          <Route
            exact
            path="/"
            render={() => (
              <div className="row searchForm">
                <div className="col-sm-8">
                  <form onSubmit={this.searchSubmit}>
                    {/* // Search Make */}

                    <div className="form-group makesearchform">
                      <label for="makeinput" />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Make"
                        onChange={this.updatemakeSearch}
                      />
                    </div>
                    {/* // Search Model */}
                    <div className="form-group modelsearchform">
                      <label for="modelinput" />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Model"
                        onChange={this.updatemodelSearch}
                      />
                    </div>
                    {/* // Search Year */}
                    <div className="form-group yearsearchform">
                      <label for="yearinput" />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Year"
                        onChange={this.updateyearSearch}
                      />
                    </div>
                    <button
                      variant="primary"
                      type="submit"
                      className="btn searchBtn"
                      onClick={this.handleSearch}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            )}
          />
          <Switch>
            <Route
              exact
              path="/account/favoritelistings"
              component={Favlistings}
            />
            <Route
              exact
              path="/account/favoritearticles"
              component={Favarticles}
            />
            <Route
              exact
              path="/account/userlistings"
              component={Userlistings}
            />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/signup" component={Articles} />
            <Route
              exact
              path="/admin"
              render={() => <Admin user={this.state.user} />}
            />
            <Route
              exact
              path="/account"
              render={() => <Account signedin={this.state.signedIn} />}
            />
            <Route exact path="/:id" component={VehDetails} />
            <Route exact path="/:id/downpay" component={Form} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;