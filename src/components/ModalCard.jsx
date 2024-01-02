import styles from "./ModalCard.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import {
  closeModal,
  countPlus,
  setSmallSize,
  setMediumSize,
  setBigSize,
} from "../slices/productsSlice";
import PropTypes from "prop-types";

export const ModalCard = (props) => {
  const { id, img, name, modalIsOpen, description, size } = props.product;

  const dispatch = useDispatch();

  const showHideClassName = modalIsOpen
    ? cn(styles.modal, styles.displayBlock)
    : cn(styles.modal, styles.displayNone);

  const smallBtnStyle = cn({
    [styles.smallButton]: size !== "small",
    [styles.smallButtonChosen]: size === "small",
  });

  const mediumBtnStyle = cn({
    [styles.mediumButton]: size !== "medium",
    [styles.mediumButtonChosen]: size === "medium",
  });

  const bigBtnStyle = cn({
    [styles.bigButton]: size !== "big",
    [styles.bigButtonChosen]: size === "big",
  });

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
              <button
                onClick={() => dispatch(setSmallSize(id))}
                className={smallBtnStyle}
                type="button">
                Small
              </button>
              <button
                onClick={() => dispatch(setMediumSize(id))}
                className={mediumBtnStyle}>
                Medium
              </button>
              <button
                onClick={() => dispatch(setBigSize(id))}
                className={bigBtnStyle}
                type="button">
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
