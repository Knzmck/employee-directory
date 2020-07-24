import React from 'react';
import "../App.css";
import Employee from './Employee.js'

const Table = (props) => {
    return (
      <table className="table table-striped table-hover table-condensed">
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
        <tbody>
        <Employee />
        </tbody>
      </table>
    );
  }
export default Table;