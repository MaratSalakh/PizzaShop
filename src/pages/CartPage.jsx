import NavBar from '../components/NavBar'
import styles from './CartPage.module.css'
import Footer from '../components/Footer'
import Menu from '../components/Menu';
import { ModalCard } from '../components/ModalCard'

const CartPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Menu className={styles.main} menuType='cartPage'></Menu>
      <Footer></Footer>
      <ModalCard></ModalCard>
    </div>
  )
};

export default CartPage;
