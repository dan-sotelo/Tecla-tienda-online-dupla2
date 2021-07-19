class Subcategoria{
      
    constructor(formatobjeto){
        this.data=formatobjeto 
      
    }

    mostrarSubcategorias() {
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        this.data.children_categories.forEach(item => {
           
            templateCard.querySelector('h5').textContent = item.name
            templateCard.querySelector('img').setAttribute("src", this.data.picture)
            templateCard.querySelector('a').dataset.id = item.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
    }
    
    static obtenerSubcategorias(url){
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Subcategoria(formatobjeto)   
                console.log(Data)
                Data.mostrarSubcategorias()               
            })
            .catch(error =>{
                console.log(error)                   
            })

    }  
    
}




const idcategoria = localStorage.getItem('idcategoria')
Subcategoria.obtenerSubcategorias("http://localhost:3000/"+idcategoria)

const botonSubcategoria = document.querySelector(".container")
botonSubcategoria.addEventListener("click", e => {
    if (e.target.classList.contains("btn-subcategoria")){
        const idsubcategoria= e.target.dataset.id
        localStorage.setItem('idsubcategoria', idsubcategoria)
    }
})





