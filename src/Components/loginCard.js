import styles from "../app.module.css";

function LoginCard() {
  return (
    <div className={styles.loginCard}>
      <h1>Login</h1>
      <form action="">
        <div className={styles.cardForm}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
