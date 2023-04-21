import express from 'express' //Aquí lo estoy llamando
import fileUpload from 'express-fileupload' //Llamo a express fileupload para subir o quitar
import postsRoutes from './routes/posts.routes.js' //importo mis rutas

const app = express()//Creo una constante de express

//Middleware
app.use(express.json())//Para manejar mis archivos .json
app.use(fileUpload({
    useTempFiles: true, //Cuando se suba una imagen guardala en una carpeta
    tempFileDir: './upload'  //Crea la carpeta para guardar mi imagen
}))

//Para mis rutas
app.use(postsRoutes) 

export default app
//Una hora con 18