import styles from "./GameItemStyle.module.css";

export default function GameItem({ imageUrl, title, category }) {
  return (
    <div
      className={`${styles.item} col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv`}
    >
      <div className="item">
        <div className={styles.thumb}>
          <a href="product-details.html">
            <img src={imageUrl} alt="" />
          </a>
        </div>
        <div className={styles["down-content"]}>
          <span className={styles.category}>{category}</span>
          <h4 className={styles.h4}>{title}</h4>
          <a className={styles.detailsButton} href="product-details.html">Details</a>
        </div>
      </div>
    </div>
  );
}
