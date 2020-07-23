import React from 'react';
import "../App.css"

const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Mackenzie</td>
            <td>Schutz</td>
            <td>email@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default Table;