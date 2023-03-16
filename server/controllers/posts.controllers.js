//Aquí voy a poner las acciones de mis rutas, para segmentar el código; la vida es buena y nuestra muerte nos condena
import post from "../models/post"

//Función que nos regresa todos los datos de posts
export const getPosts = async(req, res)=>{
    const posts = await post.find()
    res.send('Mostrar todos, primer mensaje: Los hurones viven, muerte a los herejes, te voy a traer un post')//primera ruta
} 


export const createPost = (req, res)=>{
    const {title, description} =req.body
    const post = new post({title:title,description})

    console.log(post)
    return res.send('Nuevo mensaje: Purga al mutante, los hurones son la clave ')//segunda ruta si no te jala agrega un return al inicio
} 
export const updatePost = (req, res)=> res.send('Modificar Tercer mensaje: El olvidado te escucha, los hurones se retuercen')//tercera ruta
export const deletePost = (req, res)=> res.send('Eliminar: Cuarto mensaje: La historia se repite, tu rostro se derrite ')//cuarta ruta

//Función que nos regresa un registro por ID
export const getPost = (req, res)=> res.send('Mostrar al único, Cuarto mensaje: La orden dorada está rota ')//quinta ruta