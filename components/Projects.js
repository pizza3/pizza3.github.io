import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import Labels from "./Labels";
function Tilt({ children, image }) {
  const tiltRef = React.useRef();

  React.useEffect(() => {
    if (window.innerWidth < 814) return;
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div
      className={styles.sectionProjectimage + " tilt-root"}
      ref={tiltRef}
      style={{
        transformStyle: "preserve-3d",
        backgroundImage: `url(projects/${image}.webp)`,
        backgroundImage: `url(projects/${image}.webp), linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)`,
      }}
    >
      {children}
    </div>
  );
}

const Project = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title}>Projects</div>
      <Tilt image={"caleido"}>
        <Link href="https://github.com/pizza3/caleido">
          <div className={styles.sectionProject + " tilt-child"}>
            <div className={styles.sectionProjectInfo}>
              <div className={styles.title}>Caliedo</div>
              <div className={styles.projinfo}>
                Create beautiful tessellations and symmetrical art, over 8
                type's of symmetries and editing tools.
              </div>
              <Labels data={["React", "Typescript", "Canvas"]} />
            </div>
          </div>
        </Link>
      </Tilt>
      <Tilt image={"lmonix"}>
        <Link href="https://github.com/pizza3/lmonix">
          <div className={styles.sectionProject + " tilt-child"}>
            <div className={styles.sectionProjectInfo}>
              <div className={styles.title}>Lmonix</div>
              <div className={styles.projinfo}>
                Lmonix app lets you create WebVR prototype's and application's,
                powered by Aframe and Threejs.
              </div>
              <Labels data={["React", "Three.js", "Electron", "Node"]} />
            </div>
          </div>
        </Link>
      </Tilt>
    </div>
  );
};

export default Project;
