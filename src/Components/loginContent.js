import styles from "../app.module.css";
import dumbmerch from "../Images/frame.png";

function LoginContent() {
  return (
    <div className={styles.loginContent}>
      <div className={styles.contentLogo}>
        <img src={dumbmerch} alt="Dumbmerch logo" />
      </div>
      <div className={styles.contentHeading}>
        <h1>Easy, Fast and Reliable</h1>
      </div>
      <div className={styles.contentDesc}>
        <p>
          Go shopping for merchandise, just go to dumb merch shopping. The
          biggest merchadise in <b style={{ color: "white" }}>Indonesia</b>
        </p>
        <button className={styles.contentLogin}>Login</button>
        <button className={styles.contentRegister}>Register</button>
      </div>
    </div>
  );
}

export default LoginContent;
