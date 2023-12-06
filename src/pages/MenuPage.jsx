import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Menu from '../components/Menu';
import styles from './MenuPage.module.css'
import { ModalCard } from '../components/ModalCard'

const ShopPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Menu className={styles.main} menuType='menuPage'></Menu>
      <Footer></Footer>
      <ModalCard></ModalCard>
    </div>
  )
};

export default ShopPage;
