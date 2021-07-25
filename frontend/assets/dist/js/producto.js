class Producto{
    
    
    constructor(formatobjeto){
        this.data=formatobjeto  
    }
      

    mostrarProductos() {
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        let i = 0;
        this.data.results.forEach(item => {  
            // console.log(this.data.results[i])        
            templateCard.querySelector('h5').textContent = item.title
            templateCard.querySelector('p').textContent = "PRECIO : $"+ item.price
            templateCard.querySelector('img').setAttribute("src", item.thumbnail)
            // templateCard.querySelector('button').dataset.id = item.id
            templateCard.querySelector('button').dataset.id = i
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            i++;
        })
        items.appendChild(fragment)
    }
    
    // static productoseleccionado(){
    //     const datos = this.data;
    //     return console.log(datos);
    //     // return console.log(this.data.results[producto])
    // }

    static obtenerProductos(url){
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Producto(formatobjeto)   
                console.log(Data)
                Data.mostrarProductos()               
            })
            .catch(error =>{
                console.log(error)                   
            })

    }  

}


const idsubcategoria = localStorage.getItem('idsubcategoria')
Producto.obtenerProductos("http://localhost:3000/subcategoria/"+idsubcategoria)