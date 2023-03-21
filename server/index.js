//A configurar el servidor gente
import { connectDB } from './db.js' // importando base de datos
import { PORT } from './config.js' // jalo la variable port 
import app from './app.js' //Mando llamar a mis archivos de app


connectDB(); //mando llamar
app.listen(PORT) //Puerto 3000

//Mensaje por consola 
console.log('Servidor en puerto: ', PORT)//por consola mando mensaje
