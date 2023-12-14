import CardProduct from "./CardProduct";

import styles from './Menu.module.css'
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'

const Menu = (props) => {
  const { menuType } = props;

  const products = useSelector((state) => state.products.entities);
  const ids = useSelector((state) => state.products.ids);

  const menuPage = (
    <div className={styles.menu}>
      {ids.map((id) => {
        const product = products[id];
        return (
          <CardProduct key={id} product={product}></CardProduct>
        );
      })}
    </div>
  );

  const cartPage = (
    <div className={styles.menu}>
      {ids
        .filter((id) => products[id].count > 0)
        .map((id) => {
          const product = products[id];
          return (
            <CardProduct key={id} product={product}></CardProduct>
          );
        })}
    </div>
  );

  return (menuType === 'menuPage' ? menuPage : cartPage);
};

Menu.propTypes = {
  menuType: PropTypes.string
}

export default Menu;
