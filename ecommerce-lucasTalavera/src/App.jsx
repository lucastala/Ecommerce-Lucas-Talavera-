import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import NavBar from './NavBar'
import Titulo from './Titulo'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'

console.log('hola mundo react')

function App() {
  const [count, setCount] = useState(0)

  return (  
    <BrowserRouter>
      <div> 
        <header>
          <NavBar></NavBar>
        </header>  
          <main> 
            <Routes>
             <Route path='/' element={<ItemListContainer></ItemListContainer>}/>   
             <Route path='*' element={<Navigate to='/'/>}/>   
             <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
             <Route path='/categoria/c:id' element={<ItemListContainer></ItemListContainer>}/> 
            </Routes>
          </main> 
        <footer>
        </footer>
      </div>
    </BrowserRouter>
    ) 
  }

export default App
