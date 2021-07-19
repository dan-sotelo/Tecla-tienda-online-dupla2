class Categoria{
    constructor(datos){
        this.datos = datos;
    };
    mostrarCategoria(){
        let lista = document.querySelector(".dropdown-menu");
        let fragment = document.createDocumentFragment();
        let tempCategoria = document.querySelector("#categorias").content;
        this.datos.forEach(element => {
            tempCategoria.querySelector("a").dataset.id = element.id;
            tempCategoria.querySelector(".dropdown-item").textContent = element.name;
            const clon = tempCategoria.cloneNode(true);
            fragment.appendChild(clon);
            
        });
        lista.appendChild(fragment);
    };

    static obtenerCategorias(url){
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Categoria(formatobjeto)   
                console.log(Data)
                Data.mostrarCategoria()               
            })
            .catch(error =>{
                console.log(error)                   
            })

    }  
    
}

document.addEventListener("DOMContentLoaded", e => 
Categoria.obtenerCategorias('http://localhost:3000/'));

const botonCategoria = document.querySelector(".navbar-collapse")
botonCategoria.addEventListener("click", e => {
    if (e.target.classList.contains("btn-categoria")){
        const idcategoria= e.target.dataset.id
        localStorage.setItem('idcategoria', idcategoria)
    }  
})



//API´S
//https://api.mercadolibre.com/sites/MLM/categories   "DE ESTA API OBTENEMOS LAS CATEGORIAS PADRES"
//https://api.mercadolibre.com/categories/+"ID CATEGORIA PADRE "DE ESTA API OBTENEMOS LAS CATEGORIAS HIJAS (SUBCATEGORIAS)" 
//https://api.mercadolibre.com/sites/MLM/search?category=$CATEGORY_ID "DE ESTA API OBTENEMOS LOS PRODUCTOS RELEVANTE DE LA SUBCATEGORIA SELECCIONADA"