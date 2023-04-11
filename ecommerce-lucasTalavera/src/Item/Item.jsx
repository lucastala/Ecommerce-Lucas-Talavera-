import './item.css'
const Item = ({producto}) => { 

    return (
        <div className='divCard'>
            <img src={producto.foto} className='foto' alt="imagen"/>
            <div className="card-body">
                <label>   {producto.nombre}</label>
                <label>   Precio: {producto.precio}</label>
                <label>   Stock: {producto.stock}</label>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark">comprar</button>
            </div>
        </div>
    )
}

export default Item