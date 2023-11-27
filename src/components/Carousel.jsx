import { useState } from 'react';
import styles from './Carousel.module.css'
import cn from 'classnames';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const imgs = [styles.img1, styles.img2, styles.img3];

  const onClickPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };

  const onClickNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const carouselClasses = cn(styles.carousel, imgs[index]);

  return (
    <div className={carouselClasses}>
      <button onClick={onClickPrev} className={cn(styles.btn1, styles.button)}>{'<'}</button>
      <button onClick={onClickNext} className={cn(styles.btn2, styles.button)}>{'>'}</button>
    </div >
  );
};

export default Carousel;
