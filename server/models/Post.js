//Aquí hago mis esquemas chato

import mongoose from "mongoose";
//Modelo que queremos guardar 
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true, //si o si tiene que llevar un valor
        trim: true //tamaño ajustable
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        url: String, //URL de la imagen
        public_id: String // La ID para poder eliminarla
    }
})

export default mongoose.model('Post', postSchema) //Exporto mi esquemma 