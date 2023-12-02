import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'
import CartPage from './pages/CartPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shop' element={<MenuPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
