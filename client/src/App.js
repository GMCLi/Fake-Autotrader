import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Listings from "./components/Listings/listings";
import Articles from "./components/Articles/articles";
import Signup from "./components/SignupForm/signupform";

//User Search for Make
let makeSearch = "Ferrari";
//User Search for Model
let modelSearch = "";
//Market API Key - MAKE IT UNACCESSABLE FOR PEOPLE! - WILL THIS MAKE THE APP UNUSABLE?
const marketAPIKey = "IWyyLtR20ks9ufNLvbe5WGe9VcZfenfL";



class App extends Component {
  state = {
    //State - user signed in or not
    signedIn: false,
    //Empty Array For Listings To Be Filled By Axios GET Request
    listings: [],
  }


  //Axios GET Request - no limit required, brings up top 20
  // Search = () => {
  componentDidMount() {
    //"https://jsonplaceholder.typicode.com/users"
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=" + marketAPIKey + "&seller_type=dealer&make=" + makeSearch + "&rows=25") //"https://marketcheck-prod.apigee.net/v1/search?api_key=" + marketAPIKey + "&seller_type=dealer&make=" + makeSearch
      .then(res => {
        console.log(res.data)
        const listings = res.data.listings; //.listings
        this.setState({ listings })
      })
  }
  // }


  render() {
    const singlelisting = this.state.listings.map(listing => {
      // return <Listings key={listing} id={listing.id} name={listing.name} username={listing.username} />
      return <Listings id={listing.id} key={listing.id} year={listing.build.year} make={listing.build.make} model={listing.build.model} price={listing.ref_price} images={listing.media.photo_links} />
    })

    return (
      <div className="App">

        <Router>
          <Navbar />
          <div>
            {/* <Route exact path="/:id" component={singlelisting} /> */}
            <Route exact path="/" render={() => (<div className="row">{singlelisting}</div>)} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
