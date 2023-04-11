let productos = [
    { id:'1' ,categoria: 'remereas', nombre:"proton led",stock:50, price:20, foto:'https://playmania438.com.ar/wp-content/uploads/2021/08/pack-x-4-proton-par-led-tacho-rgb-dj-dmx-profesional-18-led-D_NQ_NP_14080-MLA20083539513_042014-F.jpg'},
    { id:'2' ,categoria: 'pantalones', nombre:"laser 3W",stock:50, price:30, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuzBOtkF4ZjB-TDwK3UyB63r0TiCkRfM7l-HP3ufSDgio6eqsEpRaG-m27kYDtnYlhbU&usqp=CAU'}, 
    { id:'3' ,categoria: 'camperas', nombre:"sunstar",stock:50, price:77, foto:'https://http2.mlstatic.com/D_NQ_NP_629802-MLM52125413387_102022-W.jpg'}, 
    { id:'4' ,categoria: 'ojotas', nombre:"beam 230",stock:50, price:26, foto:'https://http2.mlstatic.com/D_NQ_NP_984386-MLA52219389047_102022-V.jpg'},
    { id:'5' ,categoria: 'buzos', nombre:"Pin Spot",stock:50, price:48, foto:'https://www.audiofer.com/wp-content/uploads/2019/06/070-1.jpg'},
] 

 export let mockFetch =(id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id == id) : productos )
        },2000)
    })
}  
