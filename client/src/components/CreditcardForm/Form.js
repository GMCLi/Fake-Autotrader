import React, { Component } from 'react';
import visa from './img/amex.jpg';
import mastercard from './img/mastercard.jpg';
import amex from './img/visa.jpg';
import Signup from "../SignUp/signUpModal";

class Form extends Component {

  render() {
    const check = this.props.signedin ?
      <div>
        &lt;
          <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Credit Card Validation Demo</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <div className="container-fluid">
          <header>
          </header>
          <div className="creditCardForm">
            <div className="heading">
              <h1>Confirm $1000 Deposit</h1>
            </div>
            <div className="payment">
              <form>
                <div className="form-group owner">
                  <label htmlFor="owner">Card Holder Name</label>
                  <input type="text" className="form-control" id="owner" />
                </div>
                <div className="form-group CVV">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" className="form-control" id="cvv" />
                </div>
                <div className="form-group" id="card-number-field">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" />
                </div>
                <div className="form-group" id="expiration-date">
                  <label>Expiration Date</label>
                  <select>
                    <option value={'01'}>January</option>
                    <option value={'02'}>February </option>
                    <option value={'03'}>March</option>
                    <option value={'04'}>April</option>
                    <option value={'05'}>May</option>
                    <option value={'06'}>June</option>
                    <option value={'07'}>July</option>
                    <option value={'08'}>August</option>
                    <option value={'09'}>September</option>
                    <option value={'10'}>October</option>
                    <option value={'11'}>November</option>
                    <option value={'12'}>December</option>
                  </select>
                  <select>
                    <option value={16}> 2019</option>
                    <option value={17}> 2020</option>
                    <option value={18}> 2021</option>
                    <option value={19}> 2022</option>
                    <option value={20}> 2023</option>
                    <option value={21}> 2024</option>
                  </select>
                </div>
                <div className="form-group" id="credit_cards">
                  <img src={visa} id="visa" alt="visa" />
                  <img src={mastercard} id="mastercard" alt="master" />
                  <img src={amex} id="amex" alt="amex" />
                </div>
                <div className="form-group" id="pay-now">
                  <button type="submit" className="btn btn-default" id="confirm-purchase">Confirm</button>
                </div>
              </form>
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

export default Form;