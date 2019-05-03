import React, { Component } from "react";
import Signup from "../SignUp/signUpModal";
import "./styles.css";

class Account extends Component {

  routefavarticles = () => {
    window.location.href = window.location.href + "/favoritearticles"
  }

  routefavlistings = () => {
    window.location.href = window.location.href + "/favoritelistings"
  }

  routeuserlistings = () => {
    window.location.href = window.location.href + "/userlistings"
  }

  routecreatelisting = () => {
    window.location.href = window.location.href + "/createlisting"
  }

  render() {
    const check = this.props.signedin ?
      <div>
        <div className="row">
          <div className="card" onClick={this.routefavarticles}>
            <img src="http://www.soningenis.com/wp-content/uploads/2013/01/Discovery_of_plaintiffs_and_Non-Parties_in_Lead_paint_Litigation.png" className="articlecard card" />
            <div className="card-body">
              <h5>Your Favorite Articles</h5>
            </div>
          </div>
          <div className="card" onClick={this.routefavlistings}>
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/Famous-Movie-Cars-Tumbler.jpg" className="favlistingscard card" />
            <div className="card-body">
              <h5>Your Favorite Listings</h5>
            </div>
          </div>
          <div className="card" onClick={this.routeuserlistings}>
            <img src="https://www.chesterstandard.co.uk/resources/images/7378477/?type=responsive-gallery-fullscreen" className="userlistingscard card" />
            <div className="card-body">
              <h5>Your Personal Listings</h5>
            </div>
          </div>
          <div className="card" onClick={this.routecreatelisting}>
            <img src="https://www.chesterstandard.co.uk/resources/images/7378477/?type=responsive-gallery-fullscreen" className="userlistingscard card" />
            <div className="card-body">
              <h5>Sell A Vehicle</h5>
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <div className="signupcard">
          <img src="http://almostveggiehouston.com/wp-content/uploads/2013/10/Sign-in.jpg" className="signincard" />
          <div className="card-body">
            <Signup />
          </div>
        </div>
      </div>

    return (
      <div>
        {check}
      </div>
    )

  }
}

export default Account;