import styles from "../styles/Home.module.css";

const Labels = ({ data }) => {
  return (
    <div className={styles.labelContainer}>
      {data.map((val, index) => (
        <span className={styles.label} key={index}>
          {val}
        </span>
      ))}
    </div>
  );
};

export default Labels;
