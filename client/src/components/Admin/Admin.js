import React from "react";
import Table from "react-bootstrap/Table";

function Admin(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Email</th>
          {/* <button className="customerUpdate">Update Customer</button>
          <button className="customerDelete">Delete Customer</button> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.user.id}</td>
          <td>{props.user.name}</td>
          <td>{props.user.email}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Admin;
