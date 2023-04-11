import { useEffect, useState } from "react"
import { mockFetch } from "../mockfetch/mockfetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        mockFetch()        
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=>console.log('Siempre y al último'))        
    }, [])
   
    return (
        <>
            { productos.length !== 0 ?
                <ItemList productos={productos} ></ItemList>
                :
                    <h2>Cargando...</h2>
            
            }
            <div>
        </div>

        </>
    )
}

export default ItemListContainer