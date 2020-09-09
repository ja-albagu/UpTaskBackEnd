const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        //await mongoose.connect(process.env.DB_MONGO, {
        await mongoose.connect("mongodb+srv://root:root@cluster0.9o7pu.mongodb.net/uptask", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DB Conectada Alban');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1); //Detener la aplicacion
    }
}

module.exports = conectarDB;