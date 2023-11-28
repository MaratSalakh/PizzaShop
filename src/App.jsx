import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shop' element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
