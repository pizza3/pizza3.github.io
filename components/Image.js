import Link from "next/link";
import styles from "../styles/Home.module.css";

function Image({ name, image, date, url }) {
  console.log('styles',styles);
  
  return (
    <div className={styles.parentSec}>
      <Link href={url}>
        <div className={styles.section}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(/${image}.webp)`,
              backgroundImage: `url(/${image}.webp), linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)`,
            }}
          />
          <div className={styles.info}>
            <div className={styles.date}>{date}</div>
            <div className={styles.title}>{name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Image;
