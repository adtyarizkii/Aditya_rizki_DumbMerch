import Navbar from "../Components/nav/nav";
import styles from "../Styling/home.module.css";
import product1 from "../Images/mouse.png";
import product2 from "../Images/keyboard.png";

function Home() {
  return (
    <div className={styles.homeBg}>
      <Navbar />
      <div className={styles.productTitle}>
        <h1>Product</h1>
      </div>
      <div className={styles.productHeader}>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={product1} alt="" />
          </div>
          <div className={styles.productName}>
            <h2>Mouse</h2>
          </div>
          <div className={styles.productDetail}>
            <small>Rp.500.000</small>
            <small>Stock: 600</small>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={product2} alt="" />
          </div>
          <div className={styles.productName}>
            <h2>Keyboard</h2>
          </div>
          <div className={styles.productDetail}>
            <small>Rp.700.000</small>
            <small>Stock: 600</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
