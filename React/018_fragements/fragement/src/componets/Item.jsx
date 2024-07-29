import PropTypes from "prop-types";
import styles from "./item.module.css";

const Item = (props) => {
  let { foodItem,bought,handleBuyClicked } = props;

  // const handleBuyClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being buyed`);
  // };

  return (
    <li className={`${styles["kg-item"] }  list-group-item  ${bought?'active':""}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyClicked}
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.oneOfType([
    PropTypes.string, // Allow string content
    PropTypes.object, // Allow object content
  ]).isRequired, // Mark prop as required
};

export default Item;
