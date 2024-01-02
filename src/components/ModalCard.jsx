import styles from "./ModalCard.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { closeModal } from "../slices/productsSlice";
import { countPlus } from "../slices/productsSlice";
import PropTypes from "prop-types";

export const ModalCard = (props) => {
  const { id, img, name, modalIsOpen, description } = props.product;

  const dispatch = useDispatch();

  const showHideClassName = modalIsOpen
    ? cn(styles.modal, styles.displayBlock)
    : cn(styles.modal, styles.displayNone);

  return (
    <div onClick={() => dispatch(closeModal(id))} className={showHideClassName}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={styles.modalMain}>
        <div className={styles.innerContent}>
          <img
            className={styles.img}
            src={img}
            alt="pizza"
            height={300}
            width={300}
          />
          <div className={styles.pizzaSettings}>
            <h1>{name}</h1>
            <span className={styles.description}>{description}</span>
            <div className={styles.buttonGroup}>
              <button className={styles.leftButton} type="button">
                Small
              </button>
              <button className={styles.counter}>Medium</button>
              <button className={styles.rightButton} type="button">
                Big
              </button>
            </div>
            <button
              className={cn(styles.button, styles.addButton)}
              type="button"
              onClick={() => {
                dispatch(countPlus(id));
                dispatch(closeModal(id));
              }}>
              Add in cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

ModalCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
  count: PropTypes.number,
};
