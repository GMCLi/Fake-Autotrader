import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Listings from "./components/Listings/listings";

//User Search for Make
let makeSearch = "Porsche";
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
      axios.get("https://jsonplaceholder.typicode.com/users") //"https://marketcheck-prod.apigee.net/v1/search?api_key=" + marketAPIKey + "&seller_type=dealer&make=" + makeSearch
        .then(res => {
          console.log(res.data)
          const listings = res.data; //.listings
          this.setState({ listings })
        })
    }
  // }


  render() {
    const singlelisting = this.state.listings.map(listing => {
      return <Listings key={listing} id={listing.id} name={listing.name} username={listing.username}/>
      // return <Listings key={listing} year={listing.build.year} make={listing.build.make} model={listing.build.model} price={listing.price} />
    })
    return (
      <div className="App">
        <Navbar />
        
        {singlelisting}

      </div>
    );
  }
}

export default App;
