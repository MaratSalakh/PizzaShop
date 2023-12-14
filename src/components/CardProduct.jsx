import styles from './CardProduct.module.css'
import PropTypes from 'prop-types'
import cn from 'classnames';

import { ModalCard } from './ModalCard';

import { openModal, countMinus, countPlus, resetCount } from '../slices/productsSlice';
import { useDispatch } from 'react-redux';

const CardProduct = (props) => {
  const { price, img, name, id, count } = props.product;
  const { cardType } = props;

  const dispatch = useDispatch();

  const menuCard = (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="pizza" width={300} height={300} />
      <h2>{name}</h2>
      <span className={styles.description}>Delicious pie with cherry</span>
      <div className={styles.cardFooter}>
        <span className={styles.cost}>from {price} $</span>
        <button className={styles.button} onClick={() => dispatch(openModal(id))}>Choose</button>
      </div>
      <ModalCard key={id} product={props.product}></ModalCard>
    </div>
  );

  const cartCard = (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="pizza" width={300} height={300} />
      <h2>{name}</h2>
      <span className={styles.description}>Delicious pie with cherry</span>
      <div className={styles.cardFooterBasket}>

        <span className={styles.cost}>{price * count} $</span>
        <button className={styles.button} onClick={() => dispatch(openModal(id))}>Change</button>

        <div className={cn(styles.buttonGroupBasket, styles.button)}>
          <span onClick={() => dispatch(countMinus(id))}>-</span>
          <span>{count}</span>
          <span onClick={() => dispatch(countPlus(id))}>+</span>
        </div>

        <button className={styles.button} onClick={() => dispatch(resetCount(id))}>X</button>

      </div>
      <ModalCard key={id} product={props.product}></ModalCard>
    </div>
  );

  return (cardType === 'menu' ? menuCard : cartCard);
};

CardProduct.propTypes = {
  product: PropTypes.object,
  cardType: PropTypes.string,
}

export default CardProduct;
