//Aquí voy a poner las acciones de mis rutas, para segmentar el código; la vida es buena y nuestra muerte nos condena
import Post from "../models/Post.js"
import { uploadImage, deleteImage} from "../libs/cloudinary.js"
import fs from 'fs-extra'

//Función que nos regresa todos los datos de posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
        //res.send('Mostrar todos, primer mensaje: Los hurones viven, muerte a los herejes, te voy a traer un post')//primera ruta
    } catch (error) {
        //console.error(error.message)
        return res.status(500).json({ message: error.message })
    }

}
//Función para insertar un dato
export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body //Variable se va a alimentar de la varibel tittle y description
        //await fs.remove(req.files.image.tempFilePath)
        let image;

        if (req.files?.image) { //Si la imagen existe
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url, //Guardo la URL con Http
                public_id: result.public_id
            }
            
        }
        const newPost = new Post({ title, description,image }) //inserto un nuevo post, ligado a la colección post y vas a recibir title y description
        await newPost.save() // Me vas a guardar la variale de newPost
        return res.json(newPost)
        //return res.send('Nuevo mensaje: Purga al mutante, los hurones son la clave ')//segunda ruta si no te jala agrega un return al inicio
    } catch (error) {
        //console.error(error.message)
        return res.status(500).json({ message: error.message })
    }
}
//Funcion para modificar un dato 
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(updatedPost)
        //res.send('Modificar Tercer mensaje: El olvidado te escucha, los hurones se retuercen')//tercera ruta
    } catch (error) {
        //console.error(error.message)
        return res.status(500).json({ message: error.message })//Envio mensaje de error
    }
}
// Para eliminar el post
export const deletePost = async (req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        if (!postRemoved) return res.sendStatus(404)

        //Si trae una imagen, borrala 
        if (postRemoved.image.public_id) {
            await deleteImage(postRemoved.image.public_id)    
        }
        return res.sendStatus(204)
        //res.send('Eliminar: Cuarto mensaje: La historia se repite, tu rostro se derrite ')//cuarta ruta
    } catch (error) {
        //console.error(error.message)
        return res.status(500).json({ message: error.message })
    }

}
//Función que nos regresa un registro por ID
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.sendStatus(404)
        return res.json(post)
        //res.send('Mostrar al único, Cuarto mensaje: La orden dorada está rota ')//quinta ruta
    } catch (error) {
        //console.error(error.message)
        return res.status(500).json({ message: error.message })
    }
}
