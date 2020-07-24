import React, { useContext } from 'react';
import "../App.css"
import EmployeeContext from "../utils/EmployeeContext"

// Create a map of all employees
const Employee = () => {
    // const { employee } = useContext(EmployeeContext);
    return (
        <tr>
            <td>IMAGE</td>
            <td> </td>
            <td>FIRST NAME</td>
            <td>LAST NAME</td>
            <td>email@email.com</td>
        </tr>
    );
}
export default Employee;