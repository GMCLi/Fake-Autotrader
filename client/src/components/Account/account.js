import React, { Component } from "react";
import Signup from "../SignUp/signUpModal";

class Account extends Component {

  render() {
    const check = this.props.signedin ? <div>Signed In</div> :
      <div>
        Please Sign In
        <Signup />
      </div>

    return (
      <div>
        {check}
      </div>
    )

  }
}

export default Account;