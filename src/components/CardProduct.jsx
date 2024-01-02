import styles from "./CardProduct.module.css";
import PropTypes from "prop-types";
// import cn from 'classnames';

import { ModalCard } from "./ModalCard";

import {
  openModal,
  countMinus,
  countPlus,
  resetCount,
} from "../slices/productsSlice";
import { useDispatch } from "react-redux";

const CardProduct = (props) => {
  const { price, img, name, id, count, description } = props.product;
  const { cardType } = props;

  const dispatch = useDispatch();

  const menuCard = (
    <div className={styles.card}>
      <img
        className={styles.img}
        onClick={() => dispatch(openModal(id))}
        src={img}
        alt="pizza"
        width={300}
        height={300}
      />
      <h2 onClick={() => dispatch(openModal(id))}>{name}</h2>
      <span className={styles.description}>{description}</span>
      <div className={styles.cardFooter}>
        <span className={styles.cost}>from {price} $</span>
        <button
          className={styles.button}
          onClick={() => dispatch(openModal(id))}>
          Choose
        </button>
      </div>
      <ModalCard product={props.product}></ModalCard>
    </div>
  );

  const cartCard = (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={img}
        alt="pizza"
        width={300}
        height={300}
      />
      <h2>{name}</h2>
      <span className={styles.description}>Delicious pie with cherry</span>
      <div className={styles.cardFooterBasket}>
        <span className={styles.cost}>{price * count} $</span>
        <button
          className={styles.button}
          onClick={() => dispatch(openModal(id))}>
          Change
        </button>

        <div className={styles.buttonGroupBasket}>
          <button
            className={styles.leftButton}
            type="button"
            onClick={() => dispatch(countMinus(id))}>
            -
          </button>
          <button className={styles.counter}>{count}</button>
          <button
            className={styles.rightButton}
            type="button"
            onClick={() => dispatch(countPlus(id))}>
            +
          </button>
        </div>

        <button
          className={styles.button}
          onClick={() => dispatch(resetCount(id))}>
          X
        </button>
      </div>
      <ModalCard product={props.product}></ModalCard>
    </div>
  );

  return cardType === "menu" ? menuCard : cartCard;
};

CardProduct.propTypes = {
  product: PropTypes.object,
  cardType: PropTypes.string,
};

export default CardProduct;
