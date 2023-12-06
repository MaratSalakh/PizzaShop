import styles from './CardProduct.module.css'
import PropTypes from 'prop-types'
import { openModal } from '../slices/modalSlice';
import { useDispatch } from 'react-redux';

const CardProduct = (props) => {
  const { price, img, name } = props.product;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="pizza" width={300} height={300} />
      <h2>{name}</h2>
      <span className={styles.description}>Delicious pie with cherry</span>
      <div className={styles.cardFooter}>
        <span className={styles.cost}>from {price} $</span>
        <button className={styles.button} onClick={() => dispatch(openModal())}>Choose</button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object
}

export default CardProduct;
