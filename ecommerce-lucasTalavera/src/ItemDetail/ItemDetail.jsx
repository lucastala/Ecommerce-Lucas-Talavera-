const ItemDetail = ({product}) => {  
 
    return (
        <div className="divCard" > 
            <div className="card-body" > 
                <img src={product.foto} className="foto" /> 
                <h3>nombre:{product.name}</h3> 
                <h4>Precio:{product.price}</h4> 
                <h4>Stock:{product.stock}</h4> 
            </div> 
            <div className="col-7" >
                contador
            </div>
        </div>
    )
} 
export default ItemDetail