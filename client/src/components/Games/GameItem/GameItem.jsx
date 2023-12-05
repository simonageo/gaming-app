import { Link } from "react-router-dom";
import styles from "./GameItemStyle.module.css";

export default function GameItem({ imageUrl, title, category, _id }) {
  return (
    <div
      className={`${styles.item}`}
    >
      <div className="item">
        <div className={styles.thumb}>
          <Link to={`/games/${_id}`}>
            <img src={imageUrl} alt="" />
          </Link>
        </div>
        <div className={styles["down-content"]}>
          <span className={styles.category}>{category}</span>
          <h4 className={styles.h4}>{title}</h4>
          <Link className={styles.detailsButton} to={`/games/${_id}`} >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
