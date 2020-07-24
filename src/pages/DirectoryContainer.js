import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import "../App.css";

function DirectoryContainer() {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    // const [employeeIndex, setEmployeeIndex] = useState(0);

    // When the component mounts, a call will be made to get random users.
    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        API.getEmployees()
            .then(employees => {
                setEmployees(employees);
                setEmployee(employees[0]);
            })
            .catch(err => console.log(err))
    };

    return (
        <EmployeeContext.Provider value={{ employee, employees }}>
            <Wrapper>
                <Navbar />
                <Table />
            </Wrapper>
        </EmployeeContext.Provider>
    )
}

export default DirectoryContainer;
