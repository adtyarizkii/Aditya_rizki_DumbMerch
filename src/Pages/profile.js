import styles from "../Styling/profile.module.css";
import Navbar from "../Components/nav/nav";
import profile from "../Images/adit.jpg";
import product from "../Images/keyboard.png";
import logo from "../Images/frame.png";

function Profile() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.profileHeading}>
            <h2 style={{color : "#F74D4D"}}>My Profile</h2>
          </div>
          <div className={styles.bio}>
            <div className={styles.bioImage}>
              <img src={profile} alt="" />
            </div>
            <div className={styles.bioData}>
              <div>
                <h4 style={{color : "#F74D4D"}}>Name</h4>
                <p>Aditya Rizki Gerwawan</p>
              </div>
              <div>
                <h4 style={{color : "#F74D4D"}}>Email</h4>
                <p>aditya.rizki0501@gmail.com</p>
              </div>
              <div>
                <h4 style={{color : "#F74D4D"}}>Phone</h4>
                <p>+62 83-829-800-185</p>
              </div>
              <div>
                <h4 style={{color : "#F74D4D"}}>Gender</h4>
                <p>Male</p>
              </div>
              <div>
                <h4 style={{color : "#F74D4D"}}>Address</h4>
                <p>
                  Jl. Peta Gg. Jamhari No. 163/95 Kota Bandung, Jawa Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.transaction}>
          <div className={styles.transactionHeading}>
            <h2 style={{color : "#F74D4D"}}>My Transaction</h2>
          </div>
          <div className={styles.transactionDetail}>
            {/* TD = Transaction Detail */}
            <div className={styles.TDLeft}>
              <div className={styles.TDImage}>
                <img src={product} alt="" />
              </div>
              <div className={styles.TDetails}>
                <div className={styles.TDTitle}>
                  <h1 style={{color : "#F74D4D"}}>Keyboard Gaming HD</h1>
                </div>
                <div className={styles.TDStock}>
                  <h2 style={{color : "#F74D4D"}}>Stock: 235</h2>
                </div>
                <div className={styles.TDPrice}>
                  <p>Rp.700.000</p>
                </div>
                <div className={styles.TDTotal}>
                  <p>Sub Total: Rp.700.000</p>
                </div>
              </div>
            </div>
            <div className={styles.TDRight}>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
