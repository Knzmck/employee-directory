import React, { Component } from "react";
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import API from "../utils/API";

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

    //   state = {
    //     currentPage: "Home"
    //   };

    //   handlePageChange = page => {
    //     this.setState({ currentPage: page });
    //   };

    //   renderPage = () => {
    //     if (this.state.currentPage === "Home") {
    //       return <Home />;
    //     } else if (this.state.currentPage === "About") {
    //       return <About />;
    //     } else if (this.state.currentPage === "Blog") {
    //       return <Blog />;
    //     } else {
    //       return <Contact />;
    //     }
    //   };

    render() {
        return (
            <main >
                <Wrapper>
                    <Navbar />
                    <Table />
                </Wrapper>
            </main>
        );
    }
}

export default DirectoryContainer;
