import styles from './CardProduct.module.css'
import img1Url from '../assets/1.jpg'

const CardProduct = () => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img1Url} alt="pizza" width={300} height={300} />
      <h2>Cherry Pie</h2>
      <span className={styles.description}>Delicious pie with cherry</span>
      <div className={styles.cardFooter}>
        <span className={styles.cost}>from 5 $</span>
        <button className={styles.button}>Choose</button>
      </div>
    </div>
  );
}

export default CardProduct;
