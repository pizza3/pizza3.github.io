import Link from "next/link";
import styles from "../styles/Home.module.css";
const Experiments = () => {
  return (
    <div id="experiments" className={styles.experiments}>
      <div className={styles.title}>
        <div>WebGL Experiments</div>
      </div>

      <div className={styles.sectionExperiment}>
        <a
          className={styles.projimagecontainer}
          target="_blank"
          href="https://codepen.io/pizza3/full/Rwoqemx"
        >
          <div
            className={styles.projimage}
            style={{
              backgroundImage: `url(/${"set13"}.webp)`,
              backgroundImage: `url(/${"set13"}.webp)`,
              flex: 3,
            }}
          />
          <div className={styles.projimageOverlay} />
          <div className={styles.projimageinfo}>
            <div className={styles.date}>March 11, 2021</div>
            <div className={styles.title} style={{ fontSize: "38px" }}>
              Toon Fireball
            </div>
          </div>
        </a>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <a
            className={styles.projimagecontainer}
            target="_blank"
            href="https://codepen.io/pizza3/full/pobevYW"
          >
            <div
              className={styles.projimage}
              style={{
                backgroundImage: `url(/${"set11"}.webp)`,
                backgroundImage: `url(/${"set11"}.webp)`,
                flex: 1,
              }}
            />
            <div className={styles.projimageOverlay} />
            <div className={styles.projimageinfo}>
              <div className={styles.date}>October 25, 2020</div>
              <div className={styles.title}>Ghost Card</div>
            </div>
          </a>
          <a
            className={styles.projimagecontainer}
            target="_blank"
            href="https://codepen.io/pizza3/full/rNLMxGP"
          >
            <div
              className={styles.projimage}
              style={{
                backgroundImage: `url(/${"set10"}.webp)`,
                backgroundImage: `url(/${"set10"}.webp)`,
                flex: 1,
              }}
            />
            <div className={styles.projimageOverlay} />
            <div className={styles.projimageinfo}>
              <div className={styles.date}>October 20, 2020</div>
              <div className={styles.title}>Waveform Viz</div>
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Link href="/experiments">
          <button className={styles.viewButton}>View All Experiments</button>
        </Link>
      </div>
    </div>
  );
};

export default Experiments;
