import CardPelicula from "./CardPelicula.component"

const CardDeck = (props) => {
    const armarCardPeliculas = () => {
        const listaCardDecks = []
        let cards = []
        props.peliculas.forEach((pelicula,index) => {
            if(index%2 == 0){
                listaCardDecks.push(
                    <div className="card-deck">
                        {cards}
                    </div>
                )
                cards = []
            }
            const card = <CardPelicula pelicula={pelicula}/>
            cards.push(card)
        })
        return listaCardDecks
    }


    return <>
        {
        armarCardPeliculas(props.peliculas)
        }
    </>
}
export default CardDeck


//ctrl shift p ->format selection
