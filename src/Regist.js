import styles from "../app.module.css"
import LoginContent from "../Components/registContent"
import LoginCard from "../Components/registCard"

function RegistPage() {
    return(
        <div className={styles.loginBg}>
            <div className={styles.loginContainer}>
                <LoginContent/>
                <LoginCard/>
            </div>
        </div>
    )
}

export default RegistPage