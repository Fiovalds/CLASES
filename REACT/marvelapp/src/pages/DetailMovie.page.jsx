import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//opciones para pasar data entre pag
//1. SessionStorge: guardar valores en el router e iban a existir durante toda las sesion
//2. history state: obteenmos ijnfo del historico de navegacion. ahi se [uede guardar valores q se van a guardar en state
//asi ;a sigpag puede acceder ahi
//3. react-router (path) 
const DetailMoviePage = () =>{

    //devuelve todos los parametros useParams
    const pathParams = useParams()

    //Variables de estado ->[nombre,funcion]
    const [peliculaSeleccionada, setPeliculaSelecionada] = useState({})

    useEffect(() => {
        const dataFetch = async() => {
            const resp = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${pathParams.movieid}`) 
            const data = await resp.json()
            setPeliculaSelecionada(data)
            console.log(data)
        }
        dataFetch()
    }, [])

    return <div>
        <h1>
        DetailMoviePage
    </h1>
    
    <Link className="btn btn-primary" to={"/movies"}>
        Regresar
    </Link>

    </div>
}

export default DetailMoviePage