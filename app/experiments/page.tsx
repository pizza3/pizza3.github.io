import Image from "../../components/Image";
import Layout from "../../components/Layout";
import data from "../../public/data.json";
import styles from "../../styles/Home.module.css";

const Experiments = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.subheadingContainer}>
          <div className={styles.subheading}>WebGL Experiments</div>
          <div style={{ color: "#3a3a3a" }}>
            WebGL & GLSL experiments I've been working on, built with three.js .
            Feel free to play around and explore.
          </div>
        </div>
        {data.map((val, index) => {
          return <Image key={index} {...val} />;
        })}
      </main>
    </Layout>
  );
};

export default Experiments;
