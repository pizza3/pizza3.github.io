import Socials from "./socials";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div style={{ cursor: "pointer" }}>Yugam</div>
      </Link>
      <Socials />
    </nav>
  );
};

export default Navbar;
