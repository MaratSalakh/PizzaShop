import styles from './ModalCard.module.css'
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../slices/modalSlice'

export const ModalCard = () => {
  const modalState = useSelector((state) => state.modalState.modalIsOpen);
  const dispatch = useDispatch();

  const showHideClassName = modalState ?
    cn(styles.modal, styles.displayBlock)
    :
    cn(styles.modal, styles.displayNone);

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        <button type='button' onClick={() => dispatch(closeModal())}>
          close
        </button>
      </section>
    </div>
  );
};
