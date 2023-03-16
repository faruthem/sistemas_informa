import express from 'express' //Aquí lo estoy llamando
import postsRoutes from './routes/posts.routes.js' //importo mis rutas


const app = express()//Creo una constante de express
app.use(express.json())//Para manejar mis archivos .json, midwerelel
app.use(postsRoutes) //Para mis rutas
app.use(postsRoutes) //mando llamar

export default app