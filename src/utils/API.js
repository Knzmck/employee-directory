import axios from "axios";

export default {
    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/?results=200&nat=us")
                .then(res => {
                    const employees = res.data;
                    const results = employees.map(employee => {
                        return {
                            first: employee.name.first,
                            last: employee.name.last,
                            image: employee.picture,
                            email: employee.email,
                            phone: employee.phone
                        }
                    })
                    resolve(results)
                })
                .catch(err => reject(err))
        })
    }
};