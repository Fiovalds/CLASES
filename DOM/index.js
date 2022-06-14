//API del dom
const probandoDOM = function() {
    /*
    const html = document.children[0]
    const body = html.children[1]
    const p = body.children[0] //document.getElementbyID("parrafo")

    //creaste nueva etiqueta -> flotando en el aire
    const div = document.createElement("div")
    //agregamos texto a la etiqueta div

    //op1:
    //const texto = document.createTextNode("Este es un div")
    //colocamos e el arbol
    div.appendChild(texto) //agregue texto como hijo de div
    p.appendChild(div) //div agrego como hijo de //

   // op2:
    div.innerText = "Este es un div"
    p.appendChild(div)

    //quiero modificar el href, que linkee a algun lado ->op rapida: ponerle id
    const aAModificar = document.getElementById("ulima_link")
    aAModificar.setAttribute("href","https://ulima.edu.pe")



    //const a = p.children[0]
    //queremos navegar x tood nuestro dom. document=representa a todo el doc html
    //pongo .children pero con p no funciona se Pone .childNodes
    //console.log(a.getAttribute("href"))
    //console.log(a.nextElementSibling)
    */

}

const f = function(){
    const a = document.getElementById("ulima_link")
    //recurro al pardre para borrar
    a.parentElement.removeChild(a)
}

//cuando le de click al boton se borre el link
const main = function(){
    const but = document.getElementById("but")
    but.addEventListener("click", f)
}

//la funcion main se va a ejeutar cuando termine de argarse toda la ventan
window.addEventListener("load",main)