import { Router } from 'express' // Si solo quiero una parte de express pongo las llaves
import { getPosts, createPost, deletePost, getPost, updatePost } from '../controllers/posts.controllers.js'//importo controladores

const router = Router() //estoy llamando a router
//obtener todos mis registros
router.get('/posts', getPosts)
//insertar todos mis registros
router.post('/posts', createPost)
// modificar
router.put('/posts/:id', updatePost)
//borrar
router.delete('/posts/:id', deletePost)
//encontrar una ruta por ID
router.get('/posts/:id', getPost)

export default router//Exporto para hacerlo publico
