//Aquí voy a poner las acciones de mis rutas, para segmentar el código; la vida es buena y nuestra muerte nos condena
import Post from "../models/Post.js"
import post from "../models/Post.js"

//Función que nos regresa todos los datos de posts
export const getPosts = async (req, res)=>{
    try {
        const posts = await post.find()
        res.send(posts)
        //res.send('Mostrar todos, primer mensaje: Los hurones viven, muerte a los herejes, te voy a traer un post')//primera ruta
    } catch (error) {
        console.error(error)
    }
  
} 

//Funcioon para insertar un dato
export const createPost = async (req, res)=>{
    const {title, description} =req.body //Variable se va a alimentar de la varibel tittle y description
    const newPost = new post({title,description}) //inserto un nuevo post, ligado a la colección post y vas a recibir title y description
    await newPost.save() // Me vas a guardar la variale de newPost
   return res.json(newPost)
//return res.send('Nuevo mensaje: Purga al mutante, los hurones son la clave ')//segunda ruta si no te jala agrega un return al inicio
} 
//Funcion para modificar un dato 
export const updatePost = async (req, res)=>{
    console.log(req.params)
    console.log(req.body)
    //const post = await Post.findByIdAndUpdate(req.params.id, req.body)
    const post = await Post.updateOne({_id:req.params.id}, req.body,{new:true})
    console.log(post)
    return res.send('Post modificado')
    //res.send('Modificar Tercer mensaje: El olvidado te escucha, los hurones se retuercen')//tercera ruta

}
//
export const deletePost = async (req, res)=> {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
    //res.send('Eliminar: Cuarto mensaje: La historia se repite, tu rostro se derrite ')//cuarta ruta

}
//Función que nos regresa un registro por ID
export const getPost = async (req, res)=> {
    const post = await Post.findById(req.params.id)
    if(!post) return res.sendStatus(404)
    return res.json(post)
    //res.send('Mostrar al único, Cuarto mensaje: La orden dorada está rota ')//quinta ruta
}
