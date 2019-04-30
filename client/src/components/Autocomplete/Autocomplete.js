import React from "react";

const Autocomplete = (props) => {
  const options = props.autocomplete.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Autocomplete