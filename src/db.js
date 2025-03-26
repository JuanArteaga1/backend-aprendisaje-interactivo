const mongoose = require( "mongoose");

exports.connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:133724@cluster0.eluxw.mongodb.net/proyectoWeb')
        console.log('BASE DE DATOS CONECTADA')
        
    } catch (error) {
        console.log(error)
    }
}