import styles from "../styles/Home.module.css";
import { twitter, mail } from "./socials";
const Contact = () => {
  return (
    <div>
      <div className={styles.title}>
        <div>Contact</div>
      </div>
      <div className={styles.subheadingContainerLeft}>
        <div style={{ color: "#3a3a3a" }}>
          If you want to reach out, discuss, or just want to say hi you can
          email or direct message me on twitter.
        </div>
      </div>
      <div className={styles.contact}>
        <a href="mailto:yugam.dhuriya@gmail.com">
          <button className={styles.contactButton}>
            {mail}
            yugam.dhuriya@gmail.com
          </button>
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=817282346801983488"
          data-screen-name="@yugam_"
        >
          <button className={styles.contactButton}>
            {twitter}
            Message
          </button>
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=817282346801983488"
          data-screen-name="@yugam_"
        >
          <button className={styles.contactButton}>
            {twitter}
            Message
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
