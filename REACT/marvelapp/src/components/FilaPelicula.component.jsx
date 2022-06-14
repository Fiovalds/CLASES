//representa solo una fila de la tala

import { useState } from "react"

const FilaPelicula = (props) => {
    //variable de esatdo en []
    const [tipoVisualizacion, setTipoVisualizacion] = useState("lectura")
    const [peliculaTitulo,setPeliculaTitulo] = useState(props.pelicula.tittle)
    const [peliculaFechaEstreno,setPeliculaFechaEstreno] = useState(props.pelicula.release_date)
    const [peliculaRecaudacion,setPeliculaRecaudacion] = useState(props.pelicula.box_office)
    const [peliculaFase,setPeliculaFase] = useState(props.pelicula.phase)
    const [peliculaEscenasPostcredito,setPeliculaEscenasPostcredito] = useState(props.pelicula.post_credit_scenes)
    
    const onPeliculaTituloChange = (evt) => {
        setPeliculaTitulo(evt.target.value)
    }

    const cambiarTipoFila = () => {
        if(tipoVisualizacion === "lectura"){
            setTipoVisualizacion("escritura")
        }else{
            setTipoVisualizacion("lectura")
        }
    }

    if(tipoVisualizacion === "lectura"){
        return <tr >
            <td>{props.pelicula.id}</td>
            <td>{props.pelicula.tittle}</td>
            <td>{parseInt(props.pelicula.release_date).toLocaleString()}</td>
            <td>{props.pelicula.box_office}</td>
            <td>{props.pelicula.phase}</td>
            <td>{props.pelicula.post_credit_scenes}</td>
            <td>
                <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
            </td>
        </tr>
    }else{
        return <tr>
            <td>{props.pelicula.id}</td>
            <td>
                <input type={"text"} value={peliculaTitulo} onChange={onPeliculaTituloChange}/>
            </td>
            <td>
                <input type={"text"} value={peliculaFechaEstreno}/>
            </td>
            <td>
                <input type={"text"} value={parseInt(peliculaRecaudacion).toLocaleString()}/>
            </td>
            <td>
                <input type={"text"} value={peliculaFase} />
            </td>
            <td>
                <input type={"text"} value={peliculaEscenasPostcredito}/>
            </td>
            <td>
                <a className="btn btn-primary" href="#" onClick={cambiarTipoFila}>Guardar</a>
                <a className="btn btn-primary" href="#" onClick={cambiarTipoFila}>Cancelar</a>
            </td>
        </tr>

    }  
    }

    
export default FilaPelicula