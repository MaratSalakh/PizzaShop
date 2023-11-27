import NavBar from './components/NavBar'
import styles from './App.module.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {


  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Carousel className={styles.main}></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default App
