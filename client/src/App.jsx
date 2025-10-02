import './App.css'
import Home from './pages/Home'
import Cart from './pages/cart'
import Orders from './pages/orders'
import Description from './pages/description'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/description/:id' element={<Description/>}/>

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App