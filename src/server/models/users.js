var sql = require('../bin/db.js');

var Users = {

    //user login
    getByEmail: async (email) => {
        try {
            var query = "SELECT * FROM users WHERE email = ?";
            var result = await sql.query(query, email);
            if (result[0].length) {
                return result[0];
            } else {
                return { error: "Can not find the user with the email address."}
            }
        } catch (err) {
            return { error: err.message }
        }
    },
    //user register
    registerUser: async (data) => {
        var query, result;
        try {
            query = "INSERT INTO users SET ?";
            result = await sql.query(query, [data]);
            return { user: result[0][0] }
        } catch (err) {
            console.log("error => ", err.message);
            return { error: err.message }
        }
    },    
}

module.exports = Users;