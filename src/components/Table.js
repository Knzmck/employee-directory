import React from 'react';
import "../App.css"

const Table = () => {
  return (
    <div>
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IMAGE</td>
            <td>1</td>
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