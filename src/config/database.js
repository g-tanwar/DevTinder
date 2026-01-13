const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tanwar_g:8PMsJ3gKz263Q5Vg@devtinder.4nzsnpt.mongodb.net/devTinder')   // cluster --> devTinder(database)
}

module.exports = connectDB;

