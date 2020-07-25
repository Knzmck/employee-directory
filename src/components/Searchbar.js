import React from 'react';


function Searchbar({ handleSearchChange }) {
    return (
        <div className="searchbar">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={ handleSearchChange }
                />
            </form>
        </div>
    )
}

export default Searchbar;


    // // Search change event 
    // handleSearchChange = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     const filter = e.target.value;
    //     const filteredList = employees.filter((item) => {
    //         let values = Object.values(item).join("").toLowerCase();
    //         return values.indexOf(filter.toLowerCase()) !== -1;
    //     })
    //     this.setEmployees({ filteredEmployees: filteredList })
    // };