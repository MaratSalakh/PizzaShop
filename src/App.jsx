import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ShopPage from './pages/ShopPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
