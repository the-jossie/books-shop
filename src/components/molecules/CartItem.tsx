import styles from "../../styles/CartItem.module.scss";
import { Imager } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { ICartType } from "../../redux/actions/types";
interface IProps {
  item: ICartType;
}

const CartItem = ({ item }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.CartItem}>
      <div className={styles.container}>
        <div className={styles.itemBox}>
          <div className={styles.cartImg}>
            <Imager src={item.book.image_url} width="110px" height="183px" />
          </div>
          <div className={styles.cartDetails}>
            <div className={styles.itemDetails}>
              <h5 className={styles.cartTitle}>{item.book.title}</h5>

              <p>{item.book.publisher}</p>
            </div>
            <button
              className={styles.removeBtn}
              onClick={() => dispatch(removeFromCart(item.book.id))}
            >
              Remove
            </button>
          </div>
        </div>
        <CartItemActions {...{ item }} />
      </div>
    </div>
  );
};

export default CartItem;

const CartItemActions = ({ item }: IProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.itemActions}>
      <div>
        <span className={styles.priceTag}>${item.book.price}</span>
        <div className={styles.actionBoxes}>
          <button
            className={styles.mutateBtn}
            onClick={() =>
              item.quantity > 1
                ? dispatch(addToCart(item.book, item.quantity - 1))
                : dispatch(removeFromCart(item.book.id))
            }
          >
            -
          </button>
          <div className={styles.valueBox}>{item.quantity}</div>
          <button
            className={
              item.quantity < item.book.available_copies
                ? styles.mutateBtn
                : styles.disabledBtn
            }
            onClick={() =>
              item.quantity < item.book.available_copies
                ? dispatch(addToCart(item.book, item.quantity + 1))
                : {}
            }
          >
            +
          </button>
        </div>
      </div>
      <span className={styles.totalprice}>
        ${(item.quantity * item.book.price).toLocaleString()}
      </span>
    </div>
  );
};
