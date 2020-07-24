import React, { useContext } from 'react';
import "../App.css"
import EmployeeContext from "../utils/EmployeeContext"

// Create a map of all employees
const Employee = (props) => {
    const { employee } = useContext(EmployeeContext);
        return (
            <tr>
                <td> <img className="card-img" src={employee.image} alt="employee image" />
                    {!employee.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} </td>
                <td>{employee.ID}</td>
                <td>{employee.first}</td>
                <td>{employee.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
            </tr>
    )       
}
export default Employee;