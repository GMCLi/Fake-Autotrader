import React, { Component } from "react";
import API from "../../utils/API";
import Card from "react-bootstrap/Card";


export default class Articles extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    API.getScrape()
      .then(response => {
        this.setState({ cars: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const scrapes =
      this.state.cars.length > 0 &&
      this.state.cars.map(car => (
        <Card
          className="text-center"
          key={car.id}
          style={{ display: "inline-block", width: "60%", height: "25%" , backgroundColor: "rgb(124, 30, 30)" , color:"white" , paddingTop:"15px", fontSize:"20px"}}
        >
          <p key={car.id}> {car.title}</p>
          <p key={car.id}>
            <a href={car.link} key={car.id} target={"_blank"}>
              Link
            </a>
          </p>
        </Card>
      ));

    console.log("our scrape: ", scrapes);
    return (
      <div>
        <h3>Car Breaking News</h3><hr></hr>
        <ul>{scrapes}</ul>
      </div>
    );
  }

}

