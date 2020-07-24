import React from "react";

const EmployeeContext = React.createContext({
    first: "",
    last: "",
    // image: "",
    // email: "",
    // phone: "",
    handleBtnClick: () => {}
})

export default EmployeeContext;