const mongoose = require('mongoose');


const connectDB = (uri) => {
    return mongoose
        .connect(uri)
        .then(() => console.log("Mongo Database Compass connection was successful"))
        .catch((error) => {
            console.log("There was an issue connecting to ther database");
            throw error;
        })
}

module.exports = connectDB;