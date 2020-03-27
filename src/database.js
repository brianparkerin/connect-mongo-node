const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb+srv://brian:brian1@pymongodb-dmvlc.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    console.log('Datadase: Connected');
};

module.exports = { connect };