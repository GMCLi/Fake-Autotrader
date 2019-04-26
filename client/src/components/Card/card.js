import React from "react";

function Card(props) {
  return (
    <div className="card-results">
      <br />
      <div className="card-header">
        <h3>Results</h3>
      </div>
      <div className="card-body" />
      {props.children}
    </div>
  );
}

export default Card;
