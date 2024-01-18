const { User } = require('../models');

// user data
const userData = [
    {
        userName: "NODEhead",
        email: "nodehead@gmail.com",
        password: "npmpassword"
    },
    {
        userName: "wordpresswarrior",
        email: "wordpresswarrior@gmail.com",
        password: "draganddrop"
    },
    {
        userName: "SQLscripter",
        email: "sqlscripter@gmail.com",
        password: "dropandcreate"
    }
]

// provides a reusable function for quickly populating database with sample users

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;