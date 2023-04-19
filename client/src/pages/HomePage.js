import { useContext } from "react"
import { context } from "../context/postContext";
export function HomePage() {

  const myContext = useContext(context)
  console.log(myContext)
  return (
    <div>
      <h1>Bienvenido a mi sitio web</h1>
      <p>Este es un ejemplo de página de inicio en React</p>
      <button>Sumar </button>
    </div>
  );
}