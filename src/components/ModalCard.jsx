import styles from './ModalCard.module.css'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { closeModal } from '../slices/productsSlice'
import { countPlus } from '../slices/productsSlice'
import PropTypes from 'prop-types'

export const ModalCard = (props) => {
  const { id, img, name, modalIsOpen, description } = props.product;

  const dispatch = useDispatch();

  const showHideClassName = modalIsOpen ?
    cn(styles.modal, styles.displayBlock) : cn(styles.modal, styles.displayNone);

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        <div className={styles.innerContent}>
          <img className={styles.img} src={img} alt="pizza" height={300} width={300} />
          <div className={styles.pizzaSettings}>
            <div className={styles.header}>
              <h1>{name}</h1>
            </div>
            <span className={styles.description}>{description}</span>
            <button className={cn(styles.button, styles.addButton)} type='button' onClick={() => {
              dispatch(countPlus(id));
              dispatch(closeModal(id));
            }}>Add in cart</button>
          </div>
        </div>
      </section >
    </div >
  );
};

ModalCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
  count: PropTypes.number
}
