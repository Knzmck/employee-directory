import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import "../App.css";
import Employee from '../components/Employee'
import Tablehead from "../components/Tablehead";
import Searchbar from "../components/Searchbar";

function DirectoryContainer() {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    // const [employeeIndex, setEmployeeIndex] = [];
    
    const loadEmployees = () => {
        API.getEmployees()
            .then(employees => {
                setEmployees(employees);
                setEmployee(employees[0]);
                console.log(employees);
            })
            .catch(err => console.log(err))
    };


    // When the component mounts, a call will be made to get random users.
    useEffect(() => {
        loadEmployees();
    }, []);


    return (

        <Wrapper>
            <Navbar />
            <Searchbar />
            <table className="table table-striped table-hover table-condensed mt-4">
                <Tablehead />
                <tbody>
                        {employees.map(employee => <Employee employee={employee} />)}
                </tbody>
            </table>
        </Wrapper>

    )
}

export default DirectoryContainer;
