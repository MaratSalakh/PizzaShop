import NavBar from '../components/NavBar'
import styles from './MainPage.module.css'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <Carousel className={styles.main}></Carousel>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
