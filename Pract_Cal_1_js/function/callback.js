const users = require("../datausers")

const searchUserById = (id, callback) => {
    const userFound = users.find((elemento)=>{
        return elemento.id === id
    });

    (userFound)
    ?   callback(null, userFound)
    :   callback("user not found");
}

module.exports= {
    searchUserById
}