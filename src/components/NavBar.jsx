import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h2 className={styles.label}>PizzaShop</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.button}>Showcase</button>
        <button className={styles.button}>Cart</button>
      </div>
    </div>
  );
}

export default NavBar;
