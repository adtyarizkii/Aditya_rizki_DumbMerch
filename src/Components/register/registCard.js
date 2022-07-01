import styles from "../../Styling/regist.module.css";

function RegistCard() {
  return (
    <div className={styles.loginCard}>
      <h1>Register</h1>
      <form action="">
        <div className={styles.cardForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistCard;