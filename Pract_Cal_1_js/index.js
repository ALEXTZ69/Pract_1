const{searchUserById} = require("./function/callback")
const users = require("./datausers")

//for each
users.forEach((elemento)=>{console.log(elemento)});

//for
for (let i = 0; i < users.length; ++i) {
    console.log(users[i]);
}

//for in
for (let i in users) {
    console.log(users[i]);
}

//for of
for (const v of users) {
    console.log(v);
}

//callback
searchUserById(7, (err,user)=> {
    if(err)
    return console.log(err)
    console.log(user)
})
