//Aquí sigo partiendo mi cadena de nonexión 
//Centralizamos variables de entorno
import dotenv from 'dotenv' // import mi archivo .env
dotenv.config()// de dot env utiliza config


export const MONGOOD_URI = process.env.MONGOOD_URI || "mongodb://localhost/testFERRETdb" // aquí estoy mandando llamar de mi archivo .env
export const PORT = process.env.PORT || 5000 //Aquí generé otra variable que se llama port