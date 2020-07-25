import React, { useContext } from 'react';
import "../App.css"
import EmployeeContext from "../utils/EmployeeContext"

// Create a map of all employees
const Employee = (props) => {
    const { employee } = useContext(EmployeeContext);
        return (
            <tr>
                <td> <img className="card-img" src={props.employee.image.thumbnail} alt="employee image" />
                    {!props.employee.image.thumbnail && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} </td>
                <td>{props.employee.ID}</td>
                <td>{props.employee.first}</td>
                <td>{props.employee.last}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.phone}</td>
            </tr>
    )       
}
export default Employee;