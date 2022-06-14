import {Link} from "react-router-dom"


const CardPelicula = (props) => {
    return <div className="card">
        <img src={props.pelicula.cover_url} />
        <div className="card-body">
            <h3 className="card-title">{props.pelicula.tittle}</h3>
            <p className="card-text">
                {props.peliculas.overview}
            </p>
            <div className="row">
                <div className="col-4">Director:</div>
                <div className="col-4">{props.peliculas.directed_by}</div>
            </div>
            <div className="row">
                <div className="col-4">"Saga:"</div>
                <div className="col-4">{props.pelicula.saga}</div>
            </div>
            <Link className="btn btn-primary" 
                to={`movies/detail/${props.pelicula.id}`}>
                Seleccionar
            </Link>
            
        </div>
    </div>

}
export default CardPelicula