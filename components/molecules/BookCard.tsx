import PersonsIcon from "../atoms/vectors/PersonsIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import StarIcon from "../atoms/vectors/StarIcon";
import HeartIcon from "../atoms/vectors/HeartIcon";
import {IBookType, Imager, parseDate } from "../../utils/helpers";
import styles from "../../styles/BookCard.module.scss";
import CartIcon from "../atoms/vectors/CartIcon";
interface IProps {
  book: IBookType;
}

const BookCard = ({ book }: IProps) => {
  const dispatch = useDispatch();

  const renderTags = (array: IBookType["tags"]) => {
    var tags = array.map((a) => a.name);
    return tags.join(", ");
  };

  return (
    <div className={styles.BookCard}>
      <div className={styles.cardImg}>
        <Imager src={book.image_url} width="110px" height="183px" />
      </div>

      <div className={styles.cardDetails}>
        <h5 className={styles.cardTitle}>{book.title}</h5>
        <p>
          {book.publisher} - {parseDate(book.release_date)}
        </p>
        <p className={styles.tags}> {renderTags(book.tags)} </p>

        <div className={styles.row}>
          <div className={styles.box}>
            <PersonsIcon />
            <p className={styles.label}>{book.number_of_purchases}</p>
          </div>
          <div className={styles.box}>
            <HeartIcon />
            <p className={styles.label}>{book.likes}</p>
          </div>
          <div className={styles.ratingBox}>
            <p className={styles.ratingLabel}>Rating: {book.rating}</p>
            <span className={styles.ratingStars}>
              {Array(Math.round(book.rating))
                .fill("")
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </span>
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.priceTag}>${book.price}</span>
          {book.available_copies > 0 ? (
            <span className={styles.availableCopies}>
              {book.available_copies} Copies Available
            </span>
          ) : (
            <span className={styles.outOfStock}>Out of stock</span>
          )}
        </div>
       {book.available_copies > 0 && <div
          onClick={() => dispatch(addToCart(book, 1))}
          className={styles.addToCart}
        >
          <CartIcon small  />
          <p>Add to Cart</p>
        </div>}
      </div>
    </div>
  );
};

export default BookCard;