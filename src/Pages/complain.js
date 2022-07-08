import styles from "../Styling/complain.module.css";
import Navbar from "../Components/nav/nav";
import me from "../Images/adit.jpg";
import me2 from "../Images/me.jfif";

function Complain() {
  let user = false;

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.vLine}></div>
      {user ? (
        <div className={styles.chatContainer}>
          <div className={styles.userList}>
            {/* chatstart */}
            <div className={styles.chatList}>
              <div className={styles.chatPfp}>
                <img src={me} alt="" />
              </div>
              <div className={styles.chat}>
                <p id="username">Aditya</p>
                <p>Halo min</p>
              </div>
            </div>
            <div className={styles.hLine}></div>
            {/* chatend */}
          </div>
          <div className={styles.chatRoom}>
            <div className={styles.chatBox}>
              <div className={styles.box}>
                <div className={styles.dialog1}>
                  <p>Halo</p>
                  <div className={styles.leftpoint}></div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.dialog2}>
                  <p>Halo admin, saya butuh bantuan</p>
                  <div className={styles.rightpoint}></div>
                </div>
              </div>
              <div className={styles.chatInput}>
                <input type="text" placeholder="Write message here.." />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.chatContainer}>
          <div className={styles.userList}>
            {/* chatstart */}
            <div className={styles.chatList}>
              <div className={styles.chatPfp}>
                <img src={me2} alt="" />
              </div>
              <div className={styles.chat}>
                <p id="username">Rizki</p>
                <p>Halo</p>
              </div>
            </div>
            <div className={styles.hLine}></div>
            {/* chatend */}
            {/* chatstart */}
            <div className={styles.chatList}>
              <div className={styles.chatPfp}>
                <img src={me} alt="" />
              </div>
              <div className={styles.chat}>
                <p id="username">Aditya</p>
                <p>Halo</p>
              </div>
            </div>
            <div className={styles.hLine}></div>
            {/* chatend */}
          </div>

          <div className={styles.chatRoom}>
            <div className={styles.chatBox}>
              <div className={styles.box}>
                <div className={styles.dialog1}>
                  <p>Halo admin, saya butuh bantuan</p>
                  <div className={styles.leftpoint}></div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.dialog2}>
                  <p>Halo</p>
                  <div className={styles.rightpoint}></div>
                </div>
              </div>
              <div className={styles.chatInput}>
                <input type="text" placeholder="Write message here.." />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Complain;
