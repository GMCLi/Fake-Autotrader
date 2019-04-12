import React from "react";
import "./styles.css";

function Listings(props) {
  return (
    <div className="card">
      <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2018-BMW-M4-110.jpg?fill=2:1&resize=980:*" className="card-img-top" alt="..." />
        <div className="card-body">
          <ul>
            <li>{props.id}</li>
            <li>{props.name}</li>
          </ul>
        </div>
    </div>
      )
    }
  //   <ul>
  //   <li>{props.year} {props.make} {props.model}</li>
  //   <li>{props.price}</li>
  // </ul>
export default Listings;