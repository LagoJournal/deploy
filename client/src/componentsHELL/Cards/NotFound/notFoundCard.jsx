import styles from "./notFoundCard.module.css";

const NotFoundCard = (props) => {
  return (
    <div className={styles.notFoundCard}>
      <p>{props.text}</p>
    </div>
  );
};

export default NotFoundCard;
