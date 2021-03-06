import React, { Component } from "react";

import API from "../utils/API";
import "../App.css";
import TableResults from '../components/TableResults';
import Tablehead from "../components/Tablehead";
import Searchbar from '../components/Searchbar';
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
class DirectoryContainer extends Component {
    state = {
        employees: [],
        search: "",
        sort: true,
        filtered: [],
    };
    // Employees will load immediately when landing on the page
    componentDidMount() {
        this.setEmployees()
    }

    setEmployees = async () => {
        await API.getEmployees()
            .then(employees => {
                this.setState({ employees, filtered: employees })
            })
            .catch(err => console.log(err));
        console.log(this.state.employees)
    }

    //Function to handle search filtering
    handleInputChange = event => {
        event.preventDefault();
        this.setState({ search: event.target.value.toLowerCase() }, (set) => {
            let criteria = this.state.search
            let searchResults = this.state.employees.filter(employee => employee.first.toLowerCase().startsWith(criteria) || employee.last.toLowerCase().startsWith(criteria))
            return this.setState({ filtered: searchResults })
        });
    };

    // Prevent searchbar from refreshing each time
    ignoreSubmit = event => {
        event.preventDefault();
        return
    }

    sortTable = async (sortBy) => {
        const criteria = sortBy
        // comparison function to sort employees
        const compare = (a, b) => {
            const employeeA = a[criteria].toUpperCase();
            const employeeB = b[criteria].toUpperCase();
            let comparison = 0;
            if (this.state.sort) {
                if (employeeA > employeeB) {
                    comparison = 1;
                } else if (employeeA < employeeB) {
                    comparison = -1;
                }
                return comparison;
            } else {
                if (employeeA > employeeB) {
                    comparison = -1;
                } else if (employeeA < employeeB) {
                    comparison = 1;
                }
                return comparison;
            }
        }
        const sortedUsers = this.state.filtered.sort(compare);
        this.setState({ sort: !this.state.sort, filtered: sortedUsers })
    }
    render() {
        return (
            <Wrapper>
                <Navbar />
                <Searchbar handleInputChange={this.handleInputChange} ignoreSubmit={this.ignoreSubmit} />
                <table className="table table-striped table-hover table-condensed mt-4">
                    <Tablehead sortTable={this.sortTable} />
                    <TableResults results={this.state.filtered} />
                </table>
            </Wrapper>)

    }

}

export default DirectoryContainer;
