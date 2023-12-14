import styles from './ModalCard.module.css'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { closeModal } from '../slices/productsSlice'
import { countPlus } from '../slices/productsSlice'
import PropTypes from 'prop-types'

export const ModalCard = (props) => {
  const { id, count, img, name, modalIsOpen } = props.product;

  const dispatch = useDispatch();

  const showHideClassName = modalIsOpen ?
    cn(styles.modal, styles.displayBlock) : cn(styles.modal, styles.displayNone);

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        <img src={img} alt="pizza" height={300} width={300} />
        <h1>{name}</h1>
        <span>Description</span>
        <button type='button' onClick={() => dispatch(countPlus(id))}>Add in cart</button>
        <button type='button' onClick={() => dispatch(closeModal(id))}>
          close
        </button>
        <span>{count}</span>
      </section>
    </div>
  );
};

ModalCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
  count: PropTypes.number
}
