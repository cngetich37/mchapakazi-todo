const mongoose = require('mongoose');


const connectDb = async()=> {
    try {
        const connect_my_db = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected:", connect_my_db.connection.host, connect_my_db.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb