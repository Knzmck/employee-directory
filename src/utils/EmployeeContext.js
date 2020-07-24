import React from "react";

const EmployeeContext = React.createContext({
    first: "",
    last: "",
    image: "",
    email: "",
    phone: "",
    ID: "",
    handleBtnClick: () => {}
})

export default EmployeeContext;