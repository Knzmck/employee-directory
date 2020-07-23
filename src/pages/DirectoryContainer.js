import React, { Component } from "react";
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

class DirectoryContainer extends Component {
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
