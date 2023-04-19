
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: "dofiqshb8",
    api_key: "483757338352375",
    api_secret: "rY3OkyHGuJzf7neu03hSXMy_3vo"
})

export const uploadImage = async filePath => {

    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}
//Para borrar
 export const deleteImage = async id => {
     return await cloudinary.uploader.destroy(id)
 }


