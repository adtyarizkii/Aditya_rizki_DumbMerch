import styles from "../Styling/detail.module.css";
import product1 from "../Images/keyboard.png";
import Navbar from "../Components/nav/nav";

function Detail() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.detailContainer}>
        <div className={styles.productDetail}>
          <div className={styles.leftDetail}>
            <img src={product1} alt="Product" />
          </div>
          <div className={styles.rightDetail}>
            <div className={styles.productTitle}>
              <h1>Keyboard Gaming HD</h1>
            </div>
            <div className={styles.productStock}>
              <small>Stock: 235</small>
            </div>
            <div className={styles.productFeature}>
              <ul>
                <li>- ASMR Keyboard</li>
                <li>- Normal Keyboard</li>
                <li>- Lightning Keyboard</li>
              </ul>
            </div>
            <div className={styles.productDesc}>
              <p>
              Gaming keyboard merupakan barang yang sangat diperlukan bila Anda seorang gamer. Terdapat banyak merek gaming keyboard terkenal seperti Logitech, Corsair, Digital Alliance, dan sebagainya, yang dijual di pasaran. Namun, terdapat banyak istilah-istilah dan fitur-fitur dalam gaming keyboard yang dapat membingungkan pemula, terutama saat memilih produk yang tepat.
              </p>
            </div>
            <div className={styles.productPrice}>Rp.700.000</div>
          </div>
        </div>
      </div>
      <button>Buy</button>
    </div>
  );
}

export default Detail;
