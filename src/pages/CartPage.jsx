import NavBar from '../components/NavBar'
import styles from './MainPage.module.css'
import Footer from '../components/Footer'

const CartPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  )
};

export default CartPage;
