import axios from 'axios'//Permite hacer peticiones de todo tipo (put,get,post)

export const getPostsRequests = async () => await axios.get('/posts')

export const createPostRequest = async (post) => await axios.post('/posts', post)

export const deletePostRequest = async id => await axios.delete('/posts/'+id)