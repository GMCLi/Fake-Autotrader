import React from "react";

function ListingCard(props) {


  return (
    <div className="card">
      {/* <p>id: {props.id}</p> */}
      <p>Make: {props.make}</p>
      <p>Model: {props.model}</p>
      <p>Year: {props.year}</p>
      <button className="updateBtn btn" onClick={() => props.update(props.id)}>Update This Listing</button>
      <button className="deleteBtn btn" onClick={() => props.delete(props.id)}>Delete This Listing</button>
    </div>
  )
}

export default ListingCard;