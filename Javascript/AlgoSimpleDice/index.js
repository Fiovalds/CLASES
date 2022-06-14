/*const but= document.getElementbyId("ok")

primera forma
but.onclick = function() 
{
   console.log("Hizo click")
} */

//segunda forma


const butOnClick = function(event) 
{
    console.log("butOnClick")
    //agrego el paframetro para saber q de vrd se esta ejeciutando
    //console.log(event.target)

    //location.href = "https://google.com"

    //se encarga de ejecutar de manera continua cierto bloq de cod
    /*window.setInterval (function()
    {
        console.log("hola!")
    }, 3000) */


    //para llamar al tetxo interno del boton
    const butClickeado = event.target
    console.log(butClickeado.innerText)
}

const butOnClick2 = function() 
{
    console.log("but0nClick2")

}



//creamos ufncion main, y luego la registramos para q 
//sea la funcion q se ejecute cuando se termine de cargar la pag
const main = function() 
{
    const but= document.getElementbyId("ok")
    //but.onclick = butOnClick
    //but.onclick = butOnClick2
   
    //recibe 2 argumentos de entrada: el evento, funcion q se ejecuta
                                    //cuando pasa el evento click
    //concateno las funciones
    but.addEventListener("click", butOnClick)
    but.addEventListener("click", butOnClick2)
}


//cuando termina de cargarse toda mi ventana, se ejecuta main
window.onload = main