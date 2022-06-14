import CardDeck from "./CardDeck.component"
import TablaPeliculas from "./TablaPeliculas.component"


//para anadir atributo se pone props y lo modificar en movipage
const ContenedorTabs = (props) => {

    if (props.modo = 1) {
        //Modo Tabla
        return <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
            <TablaPeliculas peliculas={props.peliculas}/>
        </div>
    </div>
    }else{
        //Modo Deck
        return <div className="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
            <CardDeck peliculas={props.peliculas} />
        </div>
    </div>
    }
}

export default ContenedorTabs