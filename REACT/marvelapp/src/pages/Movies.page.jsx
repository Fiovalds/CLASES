import { useEffect, useState} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenedorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

import data from "../resources/data"

const MoviesPage = () => {

    //Variables de estado ->[nombre,funcion]
    const [modoVisualizacion, setModoVisualizacion] = useState(1)
    const [listaPeliculas, setListaPeliculas] = useState([])


    //funcion se ejecute ante determinado efecto ->efec secun
    //efecto secundario. se relaiza un cambio y a aprtir de eso pasa otro
    useEffect(() => {
        const dataFetch = async() => {
            const resp = await fetch("https://mcuapi.herokuapp.com/api/v1/movies") 
            const data = await resp.json()
            setListaPeliculas(data.data)
            //console.log(data)
            return data
        }
        dataFetch()
    }, [])

    //temporal
    //const listaPeliculas = data.data

    
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral cambiarModo = {setModoVisualizacion}
                modo = {modoVisualizacion} /> 
                <div className="col-9">
                    <ContenedorTabs modo ={modoVisualizacion} peliculas={listaPeliculas} />
                </div>
            </div>
        </div>
    </div>
}

//expresion=devuelve valor como 6+7
//linea 13 dentro de esas llaves tiene uqe ir una expresion
//linea 38 a menu le paso un promp cambiaModo                  


export default MoviesPage