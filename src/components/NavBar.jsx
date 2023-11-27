import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <Link className={styles.label} to='/'>
        PizzaShop
      </Link>
      <div className={styles.buttonGroup}>
        <Link to='/shop'>
          <button className={styles.button}>
            Shop
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
