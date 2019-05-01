import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Auth from "../Authentication/auth";
import "./styles.css";

export default class Signup extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="nav-link" className="signup" onClick={this.handleShow}>
          Sign Up
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="Head"closeButton>
            <Modal.Title>Quick Sign In!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Body">
            <Auth />
          </Modal.Body>
          <Modal.Footer className="Foot">
            <Button variant="Link" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

