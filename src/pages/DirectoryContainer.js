import React, { Component, useEffect } from "react";
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import "../App.css"

function DirectoryContainer() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [userIndex, setUserIndex] = useState(0);

    useEffect(() => {
        
    })

    loadEmployees = () => {
        API.getUsers()
            .then(res => {
                this.setState({ result: res.data.results });
                console.log(res.data.results)
            })
    }
    return (
        <main >
            <Wrapper>
                <Navbar />
                <Table data={this.state.results} />
            </Wrapper>
        </main>
    )
}

export default DirectoryContainer;
