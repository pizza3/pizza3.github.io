import styles from "../styles/Home.module.css";
import Projects from "./Projects";
import Experiments from "./Experiments";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <div className={styles.homeInfo}>
        Hi, I’m <span className={styles.yugam}>Yugam Dhuriya</span>, Frontend
        Developer working on React & WebGL.
      </div>
      <Projects />
      <Experiments />
      <Contact />
    </>
  );
};

export default Home;
