import { useState, createContext, useContext, useEffect } from 'react'
import {
    getPostsRequests,
    createPostRequest,
    deletePostRequest,
    getPostRequest
} from '../api/posts'

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await getPostsRequests()
        setPosts(res.data)
    }

    const createPost = async (post) => {
        //console.log({postcontext: post})
        const res = await createPostRequest(post)
        setPosts([...posts, res.data])
    }
    const deletePost = async (id) => {
        //console.log(id)
        const res = await deletePostRequest(id)
        if (res.status === 204) {
            setPosts(posts.filter((post) => post._id !== id))
        }
        //console.log(res)
    }

    const getPost = async (id) => {
        const res = await getPostRequest(id);
        return res.data
    }

    useEffect(() => {
        getPosts()
    }, [])

    return <postContext.Provider value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
    }}>
        {children}
    </postContext.Provider>
}