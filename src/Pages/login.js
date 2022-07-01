import styles from "../Styling/login.module.css"
import LoginContent from "../Components/login/loginContent"
import LoginCard from "../Components/login/loginCard"

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