import { useState, createContext, useContext } from "react"

const context = createContext()

export const usePosts = () => {
    useContext(context)
}

export const PostContainer = ({ Children }) => {

    const [posts, setPosts] = useState([])

    console.log(posts)

    return <context.Provider value={{
        posts,
        setPosts
    }}>
        {Children}
    </context.Provider>
}