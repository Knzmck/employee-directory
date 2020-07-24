import React from 'react';
import "../App.css";

const Tablehead = (props) => {
    return (
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
    );
  }
export default Tablehead;