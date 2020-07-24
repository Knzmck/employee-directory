import React, { Component } from "react";
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import "../App.css"

class DirectoryContainer extends Component {
    state = {
        result: [],
        search: "",
        currentPage: ""
    }
    componentDidMount() {
        this.searchEmployee()
    }
    searchEmployee = () => {
        API.getUsers()
            .then(res => {
                this.setState({ result: res.data.results })
            })
    }
    render() {
        return (
            <main >
                <Wrapper>
                    <Navbar />

                    <table className="table table-striped table-hover table-condensed">
                        <Table />
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
                </Wrapper>
            </main>
        );
    }
}

export default DirectoryContainer;
