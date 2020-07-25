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
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    )
}

export default Searchbar;