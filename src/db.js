import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:133724@cluster0.eluxw.mongodb.net/')
        console.log('BASE DE DATOS CONECTADA')
        
    } catch (error) {
        console.log(error)
    }
}