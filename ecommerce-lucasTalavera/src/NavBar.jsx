import'./NavBar.css'  
import Titulo from './Titulo'

function NavBar() {  
    return ( 
        <div className="navbar">
            <ul className="navbar-menu"> 
                <Titulo></Titulo>
                <li><a href="#" className="active">Menu</a></li>
                <li><a href="#">Producto</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Contacto</a></li>  
                <input className='searcher' type="search" id="search" name="search"></input>
                <button  className='SearchButton' type="submit">Producto</button>
            </ul>
        </div>
    )
  } 
  export default NavBar