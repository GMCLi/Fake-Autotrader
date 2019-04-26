import React from "react";
import Table from "react-bootstrap/Table";

function Admin() {
  return (
    <Table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Email</th>
          <button className="customerUpdate">Update Customer</button>
          <button className="customerDelete">Delete Customer</button>
        </tr>
      </thead>
    </Table>
  );
}

export default Admin;
