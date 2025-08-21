const mongoose = require( "mongoose");
require('dotenv').config();

exports.connectdb = async () => {
    try {
        await mongoose.connect(process.env.base_de_datos)
        console.log('BASE DE DATOS CONECTADA')
        
    } catch (error) {
        console.log(error)
    }
}