import mongoose from 'mongoose'; //Conector que me permite jalar scripts y selects, updates
import {MONGOOD_URI} from './config.js' // importo desde config
//mongoose.connect('mongodb://localhost/mibase')// cadena de conexión
//Cade de conexión con atlas 
//mongodb+srv://<username>:<contraseña>@clusterfinalnube.hyapnsf.mongodb.net/test

//Función para la conexión try catch
export async function connectDB(){
    try{
        const db = await mongoose.connect(MONGOOD_URI)// cadena de conexión, mongood_uri viene de .env
        console.log('Base de datos conectada al corazón de los hurones',db.connection.name)// mensaje de que estás conectado, trata con name
    } catch (error) {
        console.error(error)
    }
}
