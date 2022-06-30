import styles from "../app.module.css"
import LoginContent from "../Components/loginContent"
import LoginCard from "../Components/loginCard"

function LoginPage() {
    return(
        <div className={styles.loginBg}>
            <div className={styles.loginContainer}>
                <LoginContent/>
                <LoginCard/>
            </div>
        </div>
    )
}

export default LoginPage