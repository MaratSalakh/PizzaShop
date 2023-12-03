import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Menu from '../components/Menu';
import styles from './MenuPage.module.css'

const ShopPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Menu className={styles.main} menuType='menuPage'></Menu>
      <Footer></Footer>
    </div>
  )
};

export default ShopPage;
