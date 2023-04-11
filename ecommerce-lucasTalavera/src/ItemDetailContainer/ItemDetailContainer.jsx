import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFetch } from "../mockfetch/mockfetch"

const ItemDetailContainer = () => {  
    const [product, setproduct] =useState({}) 
    const {pid}= useParams() 


    useEffect(()=>{
        mockFetch(pid) 
        .then(resp=>setproduct(resp))
        .catch((err)=> console.log(err))
    },[])
    return (
        <ItemDetail product={product} />
    )
} 
export default ItemDetailContainer