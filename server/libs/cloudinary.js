
import { v2 as cloudinary } from "cloudinary"
//import { fileUpload } from "express-fileUpload"
//const fileUpload = require('express-fileUpload')
//const cloudinary = require('cloudinary').v2
//Configruación cloudinary
cloudinary.config({ 
    cloud_name: "dofiqshb8",
    api_key: "483757338352375",
    api_secret: "rY3OkyHGuJzf7neu03hSXMy_3vo"
  })

export const uploadImage =async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Ferret'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
