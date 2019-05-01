import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./auth.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Auth extends Component {
  render() {
    const { user, signOut, signInWithGoogle, setUser } = this.props;
    if (user) {
      console.log(user);
    }
    console.log(user);
    return (
      <div className="Auth">
        <header className="Auth-header">
          <br />
          <img
            src={
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2017%2F01%2F18200433%2FGmail.jpg&w=450&c=sc&poi=face&q=85"
            }
            className="Auth-logo"
            alt="logo"
          />
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}

          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button
              onClick={() => {
                signInWithGoogle().then(user =>
                  setUser({
                    name: user.user.displayName,
                    email: user.user.email,
                    id: user.user.uid
                  })
                );
              }}
            >
              Sign in with Google
            </button>
          )}
          <br />
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Auth);

