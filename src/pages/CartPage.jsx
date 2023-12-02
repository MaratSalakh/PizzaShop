import NavBar from '../components/NavBar'
import styles from './MainPage.module.css'
import Footer from '../components/Footer'
import Menu from '../components/Menu';

const CartPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Menu menuType='cartPage'></Menu>
      <Footer></Footer>
    </div>
  )
};

export default CartPage;
