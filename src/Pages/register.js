import styles from "../Styling/regist.module.css"
import RegisterContent from "../Components/register/registContent"
import RegisterCard from "../Components/register/registCard"

function RegisterPage() {
    return(
        <div className={styles.loginBg}>
            <div className={styles.loginContainer}>
                <RegisterContent/>
                <RegisterCard/>
            </div>
        </div>
    )
}

export default RegisterPage