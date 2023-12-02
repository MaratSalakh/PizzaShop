import CardProduct from "./CardProduct";
import styles from './Menu.module.css'
import { useSelector } from "react-redux";

const Menu = () => {
  const products = useSelector((state) => state.products.entities);
  const ids = useSelector((state) => state.products.ids);

  return (
    <div className={styles.menu}>
      {ids.map((id) => {
        const product = products[id];
        return (
          <CardProduct key={id} product={product}></CardProduct>
        );
      })}
    </div>
  );
};

export default Menu;
