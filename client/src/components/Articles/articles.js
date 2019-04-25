import React, { Component } from "react";
import API from "../../utils/API";

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
        <ol className="text-center" key={car.id}>
          <p>Title: {car.title}</p>
          <p>
            Link:{" "}
            <a href={car.link} target={"_blank"}>
              {car.link}
            </a>
          </p>
        </ol>
      ));

    console.log("our scrape: ", scrapes);
    return (
      <div>
        <h3>Car Breaking News</h3>
        <ul>{scrapes}</ul>
      </div>
    );
  }
}
