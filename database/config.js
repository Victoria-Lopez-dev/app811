
const mongoose = require('mongoose');


const dbConnection = async (req, res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB is connected');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarnos a la DB');
    }

}

module.exports = {
    dbConnection
}

