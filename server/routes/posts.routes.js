import{ Router } from 'express' // Si solo quiero una parte de express pongo las llaves
 import {getPosts, createPost, deletePost, getPost, updatePost} from '../controllers/posts.controllers.js'//importo controladores

const router = Router() //estoy llamando a router

router.get('/posts', getPosts)

router.post('/posts', createPost )
router.put('/posts', updatePost )
router.delete('/posts', deletePost )

router.get('/posts:id', getPost )




export default router//Exporto para hacerlo publico
